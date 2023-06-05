import { Axios } from "@/apis";
import { Login, User } from "@/schemas";

export const URL_AUTH = {
  default: "/api/v1/auth/",
  login: "api/v1/auth/login",
  signup: "api/v1/auth/signup",
};

export const loginUser = async (data: Login) => {
  const response = await Axios.post(URL_AUTH.login, data);

  if (response?.status !== 200) throw response.data;
  return response.data;
};

export const signupUser = async (data: User) => {
  const response = await Axios.post(URL_AUTH.signup, data);

  if (response?.status !== 201) throw response.data;
  return response.data;
};
