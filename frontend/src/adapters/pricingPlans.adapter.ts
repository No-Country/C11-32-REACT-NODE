import { PricingPlan } from "@/models";

export const pricingPlansListAdapter = (
  data: string
): Partial<PricingPlan>[] => {
  const pricingPlansList = JSON.parse(data) as PricingPlan[];

  return pricingPlansList.map((item) => ({
    currency: item.currency,
    product: {
      name: item.product.name,
      defaultPrice: item.product.default_price,
      description: item.product.description,
    },
    amount: item.amount,
    interval: item.interval_count + item.interval,
  }));
};
