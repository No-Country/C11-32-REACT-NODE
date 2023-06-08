import jwt from "jsonwebtoken";
import chekUserCredential from "../services/auth.service";
import UsersService from "../services/user.service";
import { CONFIG } from "~/config/config";
import { NextFunction, Request, Response } from "express";
import SubscriptionService from "~/services/subscriptions.service";



const postLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await chekUserCredential(email, password);
    const userJson = await user?.toJSON();
    console.log("Auth.Controller-User: ", userJson);
    if (!user) {
      //! If user is equal to null or user does not exit, return this:
      return res.status(401).json({ message: "Email or password is incorrect" });
    }

    //? Make a stripe request that return user´s status subscription 
    const subscription = await SubscriptionService.getIdSubscriptionAndIdCustomerByEmail(email);
    const hasSubscriptionActive = await SubscriptionService.hasSubscriptionActive(subscription?.idSubscription);

    const {username, role:{description}} = userJson.profile[0];
    console.log("Username: ", username, "Rol del usuario: ", description);
    const token = jwt.sign(
      {
        id: userJson.id,
        first_name: userJson.first_name,
        last_name: userJson.last_name,
        role: description,
        username,
        hasSubscriptionActive,
      },
      CONFIG.JWT_SECRET,
      { expiresIn: "6h" },
    );

    //? Update the user´s token
    UsersService.updateUser(user.id, { token });
    
    return res.status(200).json({  message: "Correct credentials", token  });
  } catch (error) {
    next(error);
  }
};

export default postLogin;
