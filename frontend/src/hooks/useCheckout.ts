import { useStripe } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { useState } from "react";
import { toast } from "sonner";

const useCheckout = () => {
  const stripe = useStripe();
  const [cardElement, setCardElement] = useState<StripeCardElement | null>();

  const getCard = (CardElement: StripeCardElement) => {
    setCardElement(CardElement);
  };

  const createPayment = async () => {
    if (!stripe || !cardElement) return;

    try {
      const result = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      const paymentMethodId = result.paymentMethod?.id;
      console.log("PaymentMethodId:", paymentMethodId);
      return paymentMethodId;
    } catch (error) {
      toast.error("A problem occurred while processing payment");
    }
  };
  return {
    createPayment,
    setCardElement,
    getCard,
  };
};

export default useCheckout;
