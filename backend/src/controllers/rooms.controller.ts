import { NextFunction, Request, Response } from "express";
import { sequelize } from "~/db/models";
import { RoomI } from "~/db/models/Room.model";
import ParticipantsService from "~/services/participant.service";
import RoomsService from "~/services/room.service";

export async function createRoom(request: Request, response: Response, next: NextFunction) {
  const body: RoomI = request.body;
  try {
    const newRoom = await RoomsService.createRoom(body);
    return response.status(201).json({ result: newRoom });
  } catch (error) {
    next(error);
  } finally {
    await sequelize.close();
  }
}

export async function joinRoom(request: Request, response: Response, next: NextFunction) {
  const { room_id, user_id } = request.body;
  try {
    await ParticipantsService.joinRoom(room_id, user_id);
    return response.status(201).json({ message: "Participant joined successfully" });
  } catch (error) {
    next(error);
  } finally {
    await sequelize.close();
  }
}

export async function leaveRoom(request: Request, response: Response, next: NextFunction) {
  const { room_id, user_id } = request.body;
  try {
    await ParticipantsService.leaveRoom(room_id, user_id);
    return response.sendStatus(204);
  } catch (error) {
    next(error);
  } finally {
    await sequelize.close();
  }
}

export async function getAllRooms(request: Request, response: Response, next: NextFunction) {
  try {
    const rooms = await RoomsService.getAllRooms();
    return response.status(200).json({ result: rooms });
  } catch (error) {
    next(error);
  } finally {
    await sequelize.close();
  }
}
