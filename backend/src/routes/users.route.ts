import { NextFunction, Request, Response, Router } from "express";
import { getUsers } from "~/controllers/user.controller";

const routeUser = Router();

routeUser
  .get("/", getUsers);

export default routeUser;
