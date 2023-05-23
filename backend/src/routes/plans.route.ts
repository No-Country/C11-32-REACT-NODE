import { Router } from "express";
import { getPlans } from "~/controllers/plans.controller";

const routeSuscriptions = Router();

routeSuscriptions.get("/", getPlans);

export default routeSuscriptions;
