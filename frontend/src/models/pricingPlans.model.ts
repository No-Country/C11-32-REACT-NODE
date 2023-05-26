export interface PricingPlan {
  id: string;
  object: string;
  active: boolean;
  aggregate_usage?: string | null;
  amount: number;
  amount_decimal: string;
  billing_scheme: string;
  created: number;
  currency: string;
  interval: string;
  interval_count: number;
  livemode: boolean;
  metadata: Metadata;
  nickname?: string;
  product: Partial<Product>;
  tiers_mode?: string | null;
  transform_usage?: string | null;
  trial_period_days?: string | null;
  usage_type: string;
}

interface Product {
  id: string;
  object: string;
  active: boolean;
  attributes: string[];
  created: number;
  default_price: string;
  description: string;
  images: string[];
  livemode: boolean;
  metadata: Metadata;
  name: string;
  package_dimensions?: string | null;
  shippable?: string | null;
  statement_descriptor?: string | null;
  tax_code?: string | null;
  type: string;
  unit_label?: string | null;
  updated: number;
  url?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Metadata {}
