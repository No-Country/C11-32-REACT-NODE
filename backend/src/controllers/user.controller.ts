import { NextFunction, Request, Response } from "express";
import { sequelize } from "~/db/models";
import { UserI } from "~/db/models/User.model";
import UsersService from "~/services/user.service";

const msg = {
  addSuccess: "the account was created correctly",
  duplicateEmail: "there is already an account with that email",
};

export function getUsers(request: Request, response: Response, next: NextFunction) {
  UsersService.findAndCount(request.query)
    .then((resultUsers) => {
      return response.status(201).json({ results: resultUsers });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    })
    .finally(async () => {
      await sequelize.close();
    });
}

export async function addUser(request: Request, response: Response, next: NextFunction) {
  const body: UserI = request.body;
  const { email } = body;
  try {
    const existingEmail = await UsersService.findUserByEmail(email);

    if (existingEmail) {
      return response.status(409).json({ message: msg.duplicateEmail });
    }

    await UsersService.createUser(body);
    return response.status(201).json({ message: msg.addSuccess });
  } catch (error) {
    next(error);
  } finally {
    await sequelize.close();
  }
}

export async function getUserById(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const user = await UsersService.getUserOr404(id);
    return response.status(200).json({ result: user });
  } catch (error) {
    console.error(error);
    next(error);
  }
}
