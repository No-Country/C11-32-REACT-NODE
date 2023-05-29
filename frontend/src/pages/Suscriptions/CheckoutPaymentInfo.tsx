import { CardPayment, DebitCard } from "@/components";
import { PricingPlan } from "@/models";
import { StripeElements } from "@stripe/stripe-js";
import { FC } from "react";

interface CheckoutPaymentInfoProps {
  element: StripeElements | null;
  pricingPlan: Partial<PricingPlan> | undefined;
}

const CheckoutPaymentInfo: FC<CheckoutPaymentInfoProps> = ({
  element,
  pricingPlan = {},
}) => {
  const { product, currency, amount = 1, interval } = pricingPlan;

  return (
    <div className="flex gap-2">
      <section className="flex-1">
        <div className="mb-4 flex justify-center">
          <DebitCard />
        </div>
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Payment Information
        </h2>
        <CardPayment element={element} />
      </section>
      <section className="flex-1">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-xl font-semibold">{product?.name}</h2>
          <p className="text-gray-600">{product?.description}</p>
          <div className="mt-4">
            <p className="text-lg font-bold">
              {currency} {amount / 100}
            </p>
            <p className="text-gray-600">{interval}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPaymentInfo;
