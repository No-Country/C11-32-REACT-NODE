import { Router } from "express";
import { getUsers, addUser } from "~/controllers/user.controller";
import validateToken from "~/middlewares/auth.middleware";

const routeUser = Router();

routeUser
  .get("/", validateToken, getUsers)
  .post("/", addUser);

export default routeUser;
