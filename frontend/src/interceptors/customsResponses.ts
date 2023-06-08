import { AxiosResponse, AxiosError } from "axios";

export const onResponse = (response: AxiosResponse) => {
  return response;
};

interface message {
  message: string;
}
export const onResponseError = (error: AxiosError) => {
  const response = error.response?.data;
  if (typeof response === "string") {
    throw new Error(response);
  }
  if (typeof response === "object") {
    const errorMesage = response as message;
    throw new Error(errorMesage.message);
  }
  throw new Error("An error occurred");
};
