import CustomError from "~/utils/custom-error";
import Users from "~/db/models/User.model";
import Profiles from "~/db/models/Profile.model";
import Roles from "~/db/models/Role.model";
import { DcryptAdapter } from "~/utils/crypto";

// type User =  Users & {
//   username?: string
// };

// type UserToken = Users & Profiles & Roles

const checkUserCredencial = async (email: string, password: string): Promise<Users | null> => {
  try {
    const user = await Users.findOne({
      where: { email },
      // attributes: {
      //   exclude: ["password", "createdAt", "updatedAt", "status", "token", "age"]
      // },
      attributes: ["id", "first_name", "last_name", "email", "password"],
      include: [{ model: Profiles, attributes: ["username"], required: true, include: [{ model: Roles, attributes: ["description"] }] }],
      // include: [{ model: Profiles, as: "profile", attributes: ["username"] }],
      // include: [
      //   {
      //     model: Profiles,
      //     as: "profile",
      //     attributes : ["role_id"],
      //     include: [
      //       {
      //         model: Roles,
      //         attributes: ["description"]

      //       }
      //     ]
      //   }
      // ]
    });
    const jsonUser = user?.toJSON();
    console.log("USUARIO: ", jsonUser.profile[0]);
    if (!user) {
      console.log("El usuario no existe!");
      throw new CustomError("Not found User", 404, "Not Found");
    }
    const verifyPassword = new DcryptAdapter().dencrypt(password, user.password);
    if (verifyPassword) {
      console.log("Aqui desde auth.service.ts", user.toJSON());
      return user;
    }

    return null;
  } catch (error) {
    console.log("error del catch: ", error);
    return null;
  }
};

export default checkUserCredencial;
