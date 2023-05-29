import { CardIc, PersonCard } from "@/assets";
import { FC } from "react";

interface CheckoutFormStep {
  Icon: FC;
}

export const checkoutFormSteps: CheckoutFormStep[] = [
  { Icon: PersonCard },
  { Icon: CardIc },
];
