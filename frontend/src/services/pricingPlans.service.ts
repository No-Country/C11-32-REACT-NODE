import { pricingPlansListAdapter } from "@/adapters";
import { Axios } from "@/apis";
import { PricingPlan } from "@/models";

export const URL_PRICING_PLANS = {
  default: "/api/v1/plans",
};

export const pricingPlansList = async () => {
  const response = await Axios.get<Partial<PricingPlan>[]>(
    URL_PRICING_PLANS.default,
    {
      transformResponse: [pricingPlansListAdapter],
    }
  );

  if (response?.status !== 200) throw response.data;
  return response.data;
};

export const getPricingPlanById = async (id: string) => {
  const response = await Axios.get<Partial<PricingPlan>>(
    `${URL_PRICING_PLANS.default}/${id}`
  );

  if (response?.status !== 200) throw response.data;
  return response.data;
};
