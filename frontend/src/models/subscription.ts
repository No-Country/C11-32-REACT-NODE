import { User } from ".";

export interface Subscription {
  customer: User;
  paymentId: string;
  planId: string;
}
