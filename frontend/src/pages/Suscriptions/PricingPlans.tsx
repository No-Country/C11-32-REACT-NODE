import { PricingCard } from "@/components";
import { PRICING_PLANS } from "@/constants";

const PricingPlans = () => {
  return (
    <main className=" mx-auto px-4 pt-8">
      <h1 className="mb-8 text-center text-4xl font-semibold">Pricing Plans</h1>
      <section className="flex flex-wrap justify-center gap-4 sm:flex-nowrap ">
        {PRICING_PLANS.map((item) => (
          <PricingCard item={item} key={item.title} />
        ))}
      </section>
    </main>
  );
};

export default PricingPlans;
