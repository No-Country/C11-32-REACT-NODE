import { NextFunction, Request, Response } from "express";
import Stripe from "stripe";
import { CONFIG } from "~/config/config";

export function newSuscription(req: Request, res: Response, next: NextFunction) {
  try {
    const stripe = new Stripe(CONFIG.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15", typescript: true });

    // stripe.prices.list({ expand: ["data.product"] }).then((products) => {
    //   res.send(products);
    // });

    stripe.plans.list({ expand: ["data.product"] }).then((plans) => {
      return res.json(plans);
    });
  } catch (error) {
    next(error);
  }
}
