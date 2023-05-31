import { Router } from "express";
import postLogin from "../controllers/auth.controller";
import { addUser } from "../controllers/user.controller";

const routeUser = Router();

routeUser
  .post("/login", postLogin)
  .post("/singup", addUser);

export default routeUser;