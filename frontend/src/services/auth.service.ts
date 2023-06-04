import { Axios } from "@/apis";
import { Login } from "@/schemas";

export const URL_AUTH = {
  default: "/api/v1/auth/login",
};

export const loginUser = async (data: Login) => {
  const response = await Axios.post(URL_AUTH.default, data);

  if (response?.status !== 200) throw response.data;
  return response.data;
};
