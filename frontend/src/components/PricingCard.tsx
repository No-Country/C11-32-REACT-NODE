import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Toggle } from ".";
import { CheckIc, CircleCardBg, PointsCardBg } from "@/assets";
import { PricingPlan } from "@/constants";

interface PricingCardProps {
  item: PricingPlan;
}

const PricingCard: FC<PricingCardProps> = ({ item }) => {
  const [checked, setChecked] = useState(false);
  const { features, interval, title, buttonText } = item;
  const valueIndex = checked ? 1 : 0;
  return (
    <div
      className="
 relative z-10 mb-10 flex max-w-sm flex-col justify-between overflow-hidden rounded-xl border border-opacity-20 bg-white px-4 py-10 sm:p-12 lg:px-6 lg:py-10 xl:p-12"
    >
      <div>
        <span className="absolute right-0 top-7 z-[-1]">
          <CircleCardBg />
        </span>
        <span className="absolute right-4 top-4 z-[-1]">
          <PointsCardBg />
        </span>
      </div>
      <div>
        <span className="text-primary mb-4 block text-lg font-semibold">
          {title}
        </span>
        <h2 className="text-dark mb-5 text-[42px] font-bold">
          {interval[valueIndex]?.price}
          <span className="text-body-color text-base font-medium">
            / {interval[valueIndex]?.duration}
          </span>
        </h2>
        {interval.length === 2 && (
          <Toggle
            checked={checked}
            handleChecked={setChecked}
            label="save 17%"
            className="mb-4"
          />
        )}
      </div>
      <div className="mb-7">
        {features.map((feature, index) => (
          <p
            className="text-body-color leading-loos mb-1 flex gap-2 text-base"
            key={index}
          >
            <span className="w-8 text-green-500">
              <CheckIc />
            </span>
            {feature}
          </p>
        ))}
      </div>
      <Link to={interval[valueIndex]?.url}>
        <Button>{buttonText}</Button>
      </Link>
    </div>
  );
};

export default PricingCard;
