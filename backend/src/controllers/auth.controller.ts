import jwt from "jsonwebtoken";
import chekUserCredential from "../services/auth.service";
import UsersService from "../services/user.service";
import { CONFIG } from "~/config/config";
import { NextFunction, Request, Response } from "express";


const postLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  chekUserCredential(email, password)
    .then((data)=>data?.toJSON())
    .then((data) => {
      console.log("Auth.Controller-User: ", data);
      if (data) {
        const {username, role:{description}} = data.profile[0];
        console.log("Usuario data: ", username);
        const token = jwt.sign(
          {
            userId: data.id,
            name: data.first_name,
            surname: data.last_name,
            username,
            role: description,
          },
          CONFIG.JWT_SECRET,
        );
        UsersService.updateUser(data.id, { token: token });
        res.status(200).json({ message: "Correct credentials", token });
      } else {
        res.status(401).json({ message: "Email or password is incorrect" });
      }
    })
    .catch((err) => {
      console.log("TCL: postLogin -> ", err);
      next(err);
    });

  // res.status(400).json({
  //   message: "Missing data",
  //   fields: { email: "example@example.com", password: "string *" },
  // });
};

export default postLogin;
