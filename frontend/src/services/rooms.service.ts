import { Axios } from "@/apis";
import { Room } from "@/schemas";

export const URL_ROOMS = {
  default: "/api/v1/rooms",
};

export const createRoom = async (data: Room, token: string) => {
  const response = await Axios.post(URL_ROOMS.default, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response?.status !== 200 && response?.status !== 201) throw response.data;
  return response.data;
};
