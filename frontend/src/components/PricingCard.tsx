import { PricingPlan } from "@/models";
import { ROUTES } from "@/routes";
import { FC } from "react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  item: Partial<PricingPlan>;
}

const PricingCard: FC<PricingCardProps> = ({ item }) => {
  const { product, currency, amount, interval, id } = item;
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <h2 className="text-xl font-semibold">{product?.name}</h2>
      <p className="text-gray-600">{product?.description}</p>
      <div className="mt-4">
        <p className="text-lg font-bold">
          {currency} {amount}
        </p>
        <p className="text-gray-600">{interval}</p>
      </div>
      <Link to={`${ROUTES.suscriptions.checkout}/${id}`}>
        <button>Comprar</button>
      </Link>
    </div>
  );
};

export default PricingCard;
