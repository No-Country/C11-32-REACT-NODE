import { Router } from "express";
import { newSuscription } from "~/controllers/suscriptions.controller";

const routeSuscriptions = Router();

routeSuscriptions.get("/", newSuscription);

export default routeSuscriptions;
