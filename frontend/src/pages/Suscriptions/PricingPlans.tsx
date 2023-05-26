import { pricingPlansList } from "@/services";
import { useQuery } from "@tanstack/react-query";

const PricingPlans = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["pricingList"],
    queryFn: pricingPlansList,
  });

  return <main>{}</main>;
};

export default PricingPlans;
