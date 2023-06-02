import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import { StripeCardElementOptions } from "@stripe/stripe-js";
import { FC, useId } from "react";
import { Button } from "..";
import { StripeCardElement } from "@stripe/stripe-js";

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
  getCard: (value: StripeCardElement) => void;
}

const CardForm: FC<CardFormProps> = ({ getCard }) => {
  const elements = useElements();
  const cardElement = elements?.getElement(CardElement);

  if (cardElement) getCard(cardElement);

  const idCard = useId();
  const stripe = useStripe();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const card = element?.getElement(CardElement);
  //   if (!stripe || !card) {
  //     return;
  //   }

  //   const optionsPaymentMethod: CreatePaymentMethodData = {
  //     type: "card",
  //     card,
  //   };

  //   const payload = await stripe.createPaymentMethod(optionsPaymentMethod);

  //   console.log("[PaymentMethod]", payload);
  // };

  return (
    <div>
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
    </div>
  );
};

export default CardForm;
