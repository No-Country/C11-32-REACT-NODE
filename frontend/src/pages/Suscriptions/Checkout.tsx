import { CardPayment, Stepper } from "@/components";
import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { checkoutFormSteps } from "@/constants";

const Checkout = () => {
  const [stepForm, setStepForm] = useState(0);
  const stripe = useStripe();
  const elements = useElements();

  const handleClickPrev = (): void => {
    if (stepForm > 0) {
      setStepForm(stepForm - 1);
    }
  };

  const handleClickNext = (): void => {
    if (stepForm < checkoutFormSteps.length - 1) {
      setStepForm(stepForm + 1);
    }
  };

  return (
    <div className="container mx-auto flex flex-col content-center gap-4 p-4 md:px-20">
      <Stepper
        steps={checkoutFormSteps}
        activeStep={stepForm}
        onClickNext={handleClickNext}
        onClickPrev={handleClickPrev}
      />

      <CardPayment />
    </div>
  );
};

export default Checkout;
