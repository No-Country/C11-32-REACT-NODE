import { NextFunction, Request, Response, Router } from "express";

const routeUser = Router();

routeUser.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("category route");
  } catch (error) {
    next(error);
  }
});

export default routeUser;
