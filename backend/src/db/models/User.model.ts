/* eslint-disable indent */
import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
class Users extends Model {
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.TEXT,
  })
  id!: string;

  @Column
  name!: string;

  @Column
  birthday!: string;
}

export default Users;
