import { CardIc, CheckedIc, TaskFinishIc } from "@/assets";
import { CheckoutPaymentInfo, CheckoutPersonalnfo } from "@/pages";
import { FC } from "react";

interface CheckoutFormStep {
  Icon: FC;
  Contend: FC;
}

export const checkoutFormSteps: CheckoutFormStep[] = [
  { Icon: CheckedIc, Contend: CheckoutPersonalnfo },
  { Icon: CardIc, Contend: CheckoutPaymentInfo },
  { Icon: TaskFinishIc, Contend: CheckoutPersonalnfo },
];
