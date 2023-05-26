import { Request, Response } from "express";
import { sequelize } from "~/db/models";
import UsersService, { UserAndProfilePayload } from "~/services/user.service";

export function getUsers(request: Request, response: Response) {
  UsersService.findAndCount(request.query)
    .then((resultUsers) => {
      return response.status(201).json({ results: resultUsers });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(async () => {
      await sequelize.close();
    });
}

export async function addUser(request: Request, response: Response) {
  const body: UserAndProfilePayload = request.body;
  if (body) {
    try {
      const user = await UsersService.createUser(body);
      return response.status(201).json({ result: user });
    } catch (error) {
      console.log(error);
    } finally {
      await sequelize.close();
    }
  } else {
    return response.status(400).json({
      messege: "missing fields",
      fields: {
        first_name: "string *",
        last_name: "string *",
        username: "string *",
        email: "example@gmail.com *",
        password: "string *",
        image_url: "url",
        code_phone: "number",
        phone: "number",
        country_id: "integer",
      },
    });
  }
}

// const addUser = async (request, response, next) => {

//     try {
//       let { first_name, last_name, email, password, username } = request.body
//       if( first_name && last_name && email && password && username){
//         console.log(request.body)
//         let user = await usersService.createUser(request.body)
//         return response.status(201).json({ results: user })
//       }else{
//         return response.status(400).json({messege: 'missing fields', fields:{
//           first_name : 'string *',
//           last_name : 'string *',
//           username : 'string *',
//           email : 'example@gmail.com *',
//           password :  'string *',
//           image_url: 'url',
//           code_phone: 'number',
//           phone: 'number',
//           country_id: 'integer'
//         }})
//       }
//     } catch (error) {
//       next(error)
//     }
//   }
