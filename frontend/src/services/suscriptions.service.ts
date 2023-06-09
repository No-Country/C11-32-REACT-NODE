import { Axios } from "@/apis";
import { Subscription } from "@/models";

export const URL_SUBSCRIPTION = {
  default: "/api/v1/subscription",
};

export const addSubscription = async (data: Subscription) => {
  const response = await Axios.post(URL_SUBSCRIPTION.default, data);

  if (response?.status !== 200) throw response.data;
  return response.data;
};
