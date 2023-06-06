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

    if (!user) {
      return res.status(401).json({ message: "Email or password is incorrect" });
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      CONFIG.JWT_SECRET,
      { expiresIn: "6h" },
    );

    const subscription = await SubscriptionService.getIdSubscriptionAndIdCustomerByEmail(email);

    const hasSubscriptionActive = await SubscriptionService.hasSubscriptionActive(subscription?.idSubscription);

    UsersService.updateUser(user.id, { token });

    return res.status(200).json({ token, name: user.first_name, last_name: user.last_name, hasSubscriptionActive });
  } catch (error) {
    next(error);
  }
};

export default postLogin;
