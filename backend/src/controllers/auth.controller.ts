import jwt from "jsonwebtoken";
import chekUserCredential from "../services/auth.service";
import UsersService from "../services/user.service";
import { CONFIG } from "~/config/config";
import { NextFunction, Request, Response } from "express";

const postLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  chekUserCredential(email, password)
    .then((data) => {
      if (data) {
        const token = jwt.sign(
          {
            name: data.first_name,
            id: data.id,
            // role: data.role
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
      next(err);
    });
};

export default postLogin;
