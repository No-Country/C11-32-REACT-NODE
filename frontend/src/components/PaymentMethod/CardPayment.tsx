import { useStripe, CardElement } from "@stripe/react-stripe-js";
import {
  CreatePaymentMethodData,
  StripeCardElementOptions,
  StripeElements,
} from "@stripe/stripe-js";
import { FC, useId } from "react";
import { Button } from "..";

const options: StripeCardElementOptions = {
  classes: {
    base: "w-full rounded-md border border-gray-300 px-3 py-2  text-base focus:border-indigo-500 focus:outline-none h-10 pt-3",
    invalid: "text-red-600",
    focus: "focus:border-indigo-500 focus:outline-none",
  },
  hidePostalCode: true,
  iconStyle: "solid",
};

interface CardFormProps {
  element: StripeElements | null;
}

const CardForm: FC<CardFormProps> = ({ element }) => {
  const idCard = useId();
  const stripe = useStripe();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const card = element?.getElement(CardElement);
    if (!stripe || !card) {
      return;
    }

    const optionsPaymentMethod: CreatePaymentMethodData = {
      type: "card",
      card,
    };

    const payload = await stripe.createPaymentMethod(optionsPaymentMethod);

    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor={idCard}
        className={"mb-2 block text-sm font-bold text-gray-700 "}
      >
        Card details
      </label>
      <CardElement
        id={idCard}
        options={options}
        onReady={() => {
          console.log("CardElement [ready]");
        }}
        onChange={(event) => {
          console.log("CardElement [change]", event);
        }}
      />
      <Button type="submit" disabled={!stripe} className="mt-4">
        Pay
      </Button>
    </form>
  );
};

export default CardForm;
