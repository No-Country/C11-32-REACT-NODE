import { NextFunction, Request, Response } from "express";
import { stripe } from "~/libs";

export function newSuscription(req: Request, res: Response, next: NextFunction) {
  try {
    req.body;

    stripe.paymentMethods.create({});
  } catch (error) {
    next(error);
  }
}
