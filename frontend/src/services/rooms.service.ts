import { Axios } from "@/apis";
import { JoinCall, RoomI } from "@/models";
import { Room } from "@/schemas";

export const URL_ROOMS = {
  default: "/api/v1/rooms",
  join: "/api/v1/rooms/join-room",
};

interface Data {
  data: RoomI[];
}

export const createRoom = async (data: Room, token = "") => {
  const response = await Axios.post(URL_ROOMS.default, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response?.status !== 200 && response?.status !== 201) throw response.data;
  return response.data;
};

export const roomsList = async () => {
  const response = await Axios.get<RoomI[]>(URL_ROOMS.default);

  if (response?.status !== 200) throw response.data;
  const responseData = response.data as Data;
  return responseData.data;
};

export const roomsJoin = async (data: JoinCall, token = "") => {
  const response = await Axios.post(URL_ROOMS.join, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response?.status !== 200 && response?.status !== 201) throw response.data;
  return response.data;
};
