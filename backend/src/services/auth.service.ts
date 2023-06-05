import CustomError from "~/utils/custom-error";
import Users from "~/db/models/User.model";
import Profiles from "~/db/models/Profile.model";
import Roles from "~/db/models/Role.model";
import { DcryptAdapter } from "~/utils/crypto";

// type User = Users & {role: string, username: string};

const checkUserCredencial = async (email: string, password: string): Promise<Users | null> => {
  try {
    const user = await Users.findOne({
      where: { email },
      include: { model: Profiles, as: "profile", attributes: ["username"] },
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
    console.log("object, ", user);
    if (!user) {
      console.log("entra");
      throw new CustomError("Not found User", 404, "Not Found");
    }
    const verifyPassword = new DcryptAdapter().dencrypt(password, user.password);
    if (verifyPassword) {
      console.log({ msj: "Aqui desde auth.service.ts", user });
      return user;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export default checkUserCredencial;
