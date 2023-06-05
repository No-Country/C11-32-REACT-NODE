import { Card, CardPayment, DebitCard } from "@/components";
import { PRICING_PLANS, PricingPlan } from "@/constants";
import { User } from "@/schemas";
import { StripeCardElement } from "@stripe/stripe-js";
import { FC, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router-dom";

interface CheckoutPaymentInfoProps {
  getCard: (value: StripeCardElement) => void;
}

const intervalDefaults = {
  price: "",
  duration: "",
  url: "",
};

const CheckoutPaymentInfo: FC<CheckoutPaymentInfoProps> = ({ getCard }) => {
  const [pricingPlan, setPricingPlan] = useState<PricingPlan>();
  const methods = useFormContext();
  const values: User = methods.watch() as User;
  const { id = "" } = useParams();
  useEffect(() => {
    const foundPlan = PRICING_PLANS.find((plan) =>
      plan.interval.some(({ url }) => url.includes(id))
    );

    if (foundPlan) {
      const selectedPlan = {
        ...foundPlan,
        interval: [
          foundPlan.interval.find(({ url }) => url.includes(id)) ??
            intervalDefaults,
        ],
      };
      setPricingPlan(selectedPlan);
    }
  }, [id]);

  PRICING_PLANS.find;
  const { title, interval } = pricingPlan ?? {};

  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row ">
      <section className="mt-8 flex-1 sm:mt-0">
        <div className="mb-4 flex justify-center">
          <DebitCard />
        </div>
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Payment Information
        </h2>
        <CardPayment getCard={getCard} />
      </section>
      <section className="flex-1">
        <Card className="flex h-80 flex-col justify-evenly sm:h-full">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Purchase detail
          </h2>
          <h3 className="text-xl font-semibold">Plan {title}</h3>
          <p className="mb-1 font-semibold text-gray-600">{`${interval?.[0].price} / ${interval?.[0].duration}`}</p>
          <hr />
          <p className="text-gray-600">
            <span className="font-semibold">Name:</span> {values.first_name}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Last name:</span> {values.last_name}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Email: </span>
            {values.email}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Age:</span> {values.age}
          </p>
        </Card>
      </section>
    </div>
  );
};

export default CheckoutPaymentInfo;
