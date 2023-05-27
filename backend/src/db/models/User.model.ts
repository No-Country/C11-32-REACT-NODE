/* eslint-disable indent */
import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  NotEmpty,
  Unique,
} from "sequelize-typescript";

export interface UserI {
  id?: string | null;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  age: number;
  // role_id?: number,
  // country: string;
  gender: string;
  // membership_id?: string
  status: string;
}

@Table({
  tableName: "users",
  timestamps: true,
  // createdAt: false,
  // updatedAt: false,
  // deletedAt: false
})
class Users extends Model implements UserI {
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.TEXT,
  })
  id!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING(50),
    // allowNull: false,
  })
  first_name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING(50)
  })
  last_name!: string;

  @AllowNull(false)
  @NotEmpty
  @Unique
  @Column
  email!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  password!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  age!: number;
  
  @Column
  gender!: string;

  @Column({
    type: DataType.STRING(5)
  })
  status!: string;
  
  // @AllowNull(false)
  // @NotEmpty
  // @Column
  // country!: string;



  // @ForeignKey(() => Roles)
  // @Column
  // role_id!: number;

  // @BelongsTo(() => Roles)
  // role: Roles;

  // @Column({
  //   type: DataType.UUID
  // })
  // @ForeignKey(() => Memberships)
  // membership_id!: string;

  // @BelongsTo(() => Memberships)
  // membership: Memberships;
}

export default Users;
