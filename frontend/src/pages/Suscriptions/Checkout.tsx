import { Button, Card, Stepper } from "@/components";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { CheckoutPaymentInfo, CheckoutPersonalnfo } from ".";
import { checkoutFormSteps } from "@/constants/formSteps";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPricingPlanById } from "@/services";

const Checkout = () => {
  const { id } = useParams();
  const [stepForm, setStepForm] = useState(0);
  const stripe = useStripe();
  const elements = useElements();
  const { data } = useQuery({
    queryKey: ["getPricingPlan"],
    queryFn: () => getPricingPlanById(id),
  });

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
      <form>
        <Stepper steps={checkoutFormSteps} activeStep={stepForm} />

        <Card>
          {stepForm === 0 && <CheckoutPersonalnfo />}
          {stepForm === 1 && (
            <CheckoutPaymentInfo element={elements} pricingPlan={data} />
          )}
          <div className="mt-16 flex justify-between gap-2">
            <Button
              className="w-max"
              onClick={handleClickPrev}
              disabled={stepForm === 0}
            >
              Previous
            </Button>
            <Button
              className="w-max"
              onClick={handleClickNext}
              disabled={stepForm === 1}
            >
              Next
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default Checkout;
