import { AxiosResponse, AxiosError } from "axios";

export const onResponse = (response: AxiosResponse) => {
  return response;
};

export const onResponseError = (error: AxiosError) => {
  if (typeof error.response?.data === "string") {
    throw new Error(error.response.data);
  } else {
    throw new Error("An error occurred");
  }
};
