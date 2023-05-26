import { PricingCard } from "@/components";
import { pricingPlansList } from "@/services";
import { useQuery } from "@tanstack/react-query";

const PricingPlans = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["pricingList"],
    queryFn: pricingPlansList,
  });

  return (
    <main>
      <h1>Pricing Plans</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <section className="flex flex-wrap gap-4">
        {data && data.map((item) => <PricingCard item={item} key={item.id} />)}
      </section>
    </main>
  );
};

export default PricingPlans;
