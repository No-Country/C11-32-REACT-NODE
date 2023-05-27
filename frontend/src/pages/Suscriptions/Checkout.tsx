import { CardIc, CheckedIc, TaskFinishIc } from "@/assets";

import { CardPayment, Stepper } from "@/components";
import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { CheckoutPersonalnfo } from ".";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <div className="container mx-auto flex flex-col content-center gap-4 p-4">
      <Stepper
        steps={[{ Icon: CheckedIc }, { Icon: CardIc }, { Icon: TaskFinishIc }]}
        activeStep={0}
      />
      <CheckoutPersonalnfo />
      <CardPayment />
    </div>
  );
};

export default Checkout;
