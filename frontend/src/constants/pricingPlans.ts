import { ROUTES } from "@/routes";

export interface PricingPlan {
  title: string;
  interval: IntervalPrincingPlan[];
  features: string[];
  buttonText: string;
}

interface IntervalPrincingPlan {
  price: string;
  duration: string;
  url: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Free",
    interval: [
      { price: "0 usd", duration: "forever", url: ROUTES.auth.register },
    ],
    features: [
      "Improve fluency through real-time video conversations - up to 3 minutes per call to practice your skills",
      "Tailored lessons for all proficiency levels - learn effectively and enjoyably",
      "Connect with students worldwide for collaborative language practice",
    ],
    buttonText: "Sign up",
  },
  {
    title: "Pro",
    interval: [
      {
        price: "5 usd",
        duration: "1 month",
        url: `${ROUTES.suscriptions.checkout}/price_1NAvuaL4adfpEVLtuMXH2eno`,
      },
      {
        price: "50 usd",
        duration: "1 year",
        url: `${ROUTES.suscriptions.checkout}/price_1NAvuaL4adfpEVLtZKEp5DZt`,
      },
    ],
    features: [
      "All the features of the free plan",
      "Unlimited real-time conversations - perfect pronunciation and communication without restrictions",
      "Access to exclusive material and advanced resources",
      "Expand your knowledge with premium lessons designed by language experts",
    ],
    buttonText: "Buy",
  },
];
