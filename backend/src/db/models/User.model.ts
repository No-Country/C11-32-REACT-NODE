/* eslint-disable indent */
import { Table, Column, Model } from "sequelize-typescript";

@Table
class Users extends Model {
  @Column
  name: string;

  @Column
  birthday: Date;
}

export default Users;
