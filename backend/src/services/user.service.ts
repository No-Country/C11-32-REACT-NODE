import { BcryptAdapter } from "../utils/crypto";
import User, { UserI } from "../db/models/User.model";
import Profile, { ProfileI } from "../db/models/Profile.model";
import { Op }  from "sequelize";
import { sequelize } from "../db";

import CustomError from "../utils/custom-error";
// import Memberships from "~/db/models/Membership.model";


interface QueriesUser {
  limit?: number,
  offset?: number,
  name?: string,
  where?: {name?: object | undefined} | undefined,
  distinct?: boolean
}

// type QueriesUserWithWhere = Pick<QueriesUser, "where">
type UsersAndCount = {rows: UserI[], count: number}
export type UserAndProfilePayload = UserI & ProfileI

export default class UsersService {

  static async findAndCount(query: QueriesUser): Promise<UsersAndCount> {
    
    const options: QueriesUser = {};

    const { limit, offset, name } = query;

    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    if (name) {
      options.where = {};
      options.where.name = { [Op.iLike]: `%${name}%` };
    }

    //It is a must to Sequelize findAndCountAll method
    options.distinct = true;

    const users = await User.findAndCountAll(options);
  
    return users;

  }

  // { first_name, last_name, email, password, username, token }
  // { first_name, last_name, email, password, username, imageProfile, codephone, phone, country_id}
  static async createUser(user: UserAndProfilePayload): Promise<object> {
    // const freeMembership = await Memberships.findOne({where: {name: "free"}}) || null;
    const transaction = await sequelize.transaction();
    try {
    
      const newUser = await User.create(   
        {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: new BcryptAdapter(10).encrypt(user.password),
          age: user.age,
          gender: user.gender,
        },
        { transaction },
      );

      const newProfile = await Profile.create(
        {
          username: user.username,
          image_url: user.image_url || "local.host.e/profile/",
          user_id: newUser.id,
          role_id: 1,
          membership_id: user.membership_id || "14e29462-cad4-4bf3-924c-a240b525197a",
          level: Number(user.level) || 0,
          is_kid_profile: user.is_kid_profile,
          code_phone: Number(user.code_phone) || 0,
          phone: Number(user.phone) || 0,
          country_id: Number(user.country_id) || 0,
        },
        { transaction },
      );

      await transaction.commit();
      return { newUser, newProfile };

    } catch (error) {
      await transaction.rollback();
      console.log(error);
      throw error;
    }
  }

  //Return Instance if we do not converted to json (or raw:true)
  static async getUserOr404(id: string) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new CustomError("Not found User", 404, "Not Found");
    }
    return user;
  }

  //Return not an Instance raw:true | we also can converted to Json instead
  async findUserById(id: string) {
    const user = await User.findByPk(id, { raw: true });
    return user;
  }

  // async findUserByEmail(email: string) {
  //   const user = await User.findOne(email, { raw: true })
  //   return user;
  // }

  // async findUserByToken(token: string, cb: string) {
  //   process.nextTick( async () => {
  //     const user = await User.findOne({
  //       where: {
  //         token,
  //       },
  //     });
  //     if (user?.token === token) {
  //       // console.log(user)
  //       return cb(null, user);
  //     }
  //   });
  //   return cb(null, null);
  // }

  static async updateUser(id: string, data: object) {
    const transaction = await sequelize.transaction();
    try {
      const user = await User.findByPk(id);

      if (!user) {
        throw new CustomError("Not found user", 404, "Not Found");
      }

      const updatedUser = await user.update(data, { transaction });

      await transaction.commit();
      return updatedUser;
      
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  // async removeUser(id) {
  //   const transaction = await models.sequelize.transaction();
  //   try {
  //     let user = await models.Users.findByPk(id);

  //     if (!user) throw new CustomError("Not found user", 404, "Not Found");

  //     await user.destroy({ transaction });

  //     await transaction.commit();

  //     return user;
  //   } catch (error) {
  //     await transaction.rollback();
  //     throw error;
  //   }
  // }
}

