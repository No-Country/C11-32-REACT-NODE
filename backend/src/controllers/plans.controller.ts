import { NextFunction, Request, Response } from "express";
import { stripe } from "~/libs";

export function getPlans(req: Request, res: Response, next: NextFunction) {
  try {
    stripe.plans.list({ expand: ["data.product"] }).then((plans) => {
      return res.json(plans.data);
    });
  } catch (error) {
    next(error);
  }
}
