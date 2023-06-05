import { NextFunction, Request, Response } from "express";
import { sequelize } from "~/db/models";
import UsersService, { UserAndProfilePayload } from "~/services/user.service";

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
  const body: UserAndProfilePayload = request.body;
  console.log("body", body);
  // const { first_name, last_name, email, username, password, age, gender, is_kid_profile } = body;
  // if (first_name && last_name && email && username && password && age && gender && is_kid_profile) {
  try {
    console.log("try", body);
    const user = await UsersService.createUser(body);
    return response.status(201).json({ result: user });
  } catch (error) {
    console.log(error);
    return response.status(400).json({
      messege: "missing fields",
      fields: {
        first_name: "string *",
        last_name: "string *",
        email: "example@gmail.com *",
        username: "string *",
        password: "string *",
        age: "number *",
        gender: "string *",
        is_kid_profile: "boolean *",
        image_url: "url",
        code_phone: "number",
        phone: "number",
        country_id: "integer",
      },
    });
    // next(error);
  } finally {
    await sequelize.close();
  }
  // } else {

  // }
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
