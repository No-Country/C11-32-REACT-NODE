import jwt from "jsonwebtoken";
import chekUserCredential from "../services/auth.service";
import UsersService from "../services/user.service";
import { CONFIG } from "~/config/config";
import { Request, Response } from "express";


const postLogin = (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email && password) {
    chekUserCredential(email, password)
      .then(data => {
        if (data) {
          console.log(data);
          const token = jwt.sign({
            // user_name: data.user_name,
            id: data.id,
            // role: data.role
          }, CONFIG.JWT_SECRET);
          UsersService.updateUser(data.id, {token:token});
          res.status(200).json({ message: "Correct credentials", token });
        } else {
          console.log(data);
          res.status(401).json({ message: "Email or password is incorrect" });
        }
      })
      .catch(err => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ 
      message: "Missing data", 
      fields: { email: "example@example.com", password: "string *" } 
    });
  }
};


export default postLogin;