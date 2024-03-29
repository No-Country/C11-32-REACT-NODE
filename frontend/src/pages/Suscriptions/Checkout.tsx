import { Button, Card, Form, ScreenLoader, Stepper } from "@/components";
import { useEffect, useState } from "react";
import { CheckoutPaymentInfo, CheckoutPersonalnfo } from ".";
import { checkoutFormSteps } from "@/constants/formSteps";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addSubscription } from "@/services";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schemas";
import { initialFormUser } from "@/constants";
import { useCheckout } from "@/hooks";
import { Subscription, User } from "@/models";

const Checkout = () => {
  const navigate = useNavigate()
  const { createPayment, getCard } = useCheckout();
  const { id = "" } = useParams();
  const [stepForm, setStepForm] = useState(0);

  const { mutate, isLoading,isSuccess } = useMutation({
    mutationFn: (data: Subscription) => addSubscription(data),
  });

  useEffect(() => {
    if(!isSuccess) return 
    navigate("/",{replace:true})
  }, [isSuccess])
  

  const methods = useForm<FieldValues>({
    resolver: zodResolver(userSchema),
    defaultValues: initialFormUser,
    mode: "all",
    criteriaMode: "all",
  });
  const hasErrorForm = Object.keys(methods.formState.errors).length === 0;

  const handleClickPrev = (): void => {
    if (stepForm > 0) {
      setStepForm(stepForm - 1);
    }
  };

  const handleClickNext = (): void => {
    if (stepForm < checkoutFormSteps.length - 1) {
      methods.trigger().then((error) => {
        if (!error) return;

        setStepForm(stepForm + 1);
      });
    }
  };

  const handleSubmit = async (data) => {
    const customer = data as User;
    const paymentId = (await createPayment()) ?? "";

    mutate({
      customer,
      paymentId,
      planId: id,
    });
  };

  if (isLoading) return <ScreenLoader />;

  return (
    <div className="container mx-auto flex flex-col content-center gap-4 p-4 md:px-20">
      <Form methods={methods} onSubmit={handleSubmit} className="w-full">
        <Stepper steps={checkoutFormSteps} activeStep={stepForm} />

        <Card className="mt-8">
          {stepForm === 0 && <CheckoutPersonalnfo />}
          {stepForm === 1 && <CheckoutPaymentInfo getCard={getCard} />}
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
              disabled={stepForm === 1 || !hasErrorForm}
            >
              Next
            </Button>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default Checkout;
