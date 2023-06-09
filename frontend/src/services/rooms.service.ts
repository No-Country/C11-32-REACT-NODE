import { Axios } from "@/apis";
import { dataVideoCall, RoomI } from "@/models";
import { Room } from "@/schemas";

export const URL_ROOMS = {
  default: "/api/v1/rooms",
  join: "/api/v1/rooms/join-room",
  leave: "/api/v1/rooms/leave-room",
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

export const roomsList = async (): Promise<RoomI[]> => {
  const response = await Axios.get<Data>(URL_ROOMS.default);

  if (response?.status !== 200) throw response.data;
  const responseData = response.data as Data;
  return responseData.data as RoomI[];
};

export const joinRoom = async (data: dataVideoCall, token = "") => {
  const response = await Axios.post(URL_ROOMS.join, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response?.status !== 200 && response?.status !== 201) throw response.data;
  return response.data;
};

export const leaveRoom = async (data: dataVideoCall, token = "") => {
  const response = await Axios.delete(URL_ROOMS.leave, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });

  if (response?.status !== 200 && response?.status !== 201) throw response.data;
  return response.data;
};
