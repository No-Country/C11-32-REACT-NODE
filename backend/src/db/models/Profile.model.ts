import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  NotEmpty,
  Unique,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Roles from "./Role.model";
import Memberships from "./Membership.model";
import Users from "./User.model";

export interface ProfileI {
  id?: string | null;
  username: string;
  image_url?: string;
  user_id: string;
  role_id: number;
  membership_id?: string;
  level?: string;
  is_kid_profile: boolean;
  code_phone?: number;
  phone?: number;
  country_id?: number;
  status?: string;
}

@Table({
  tableName: "profiles",
  timestamps: true,
})
class Profiles extends Model implements ProfileI {
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
    id!: string;

  @AllowNull(false)
  @NotEmpty
  @Unique
  @Column({
    type: DataType.STRING(50)
  })
    username!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.TEXT
  })
    image_url!: string;

  @AllowNull(false)
  @NotEmpty
  @ForeignKey(() => Users)
  @Column
    user_id!: string;

  @AllowNull(false)
  @NotEmpty
  @ForeignKey(() => Roles)
  @Column
    role_id!: number;

  @ForeignKey(() => Memberships)
  @Column
    membership_id!: string;

  @Column
    level!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
    is_kid_profile!: boolean;

  @Column
    code_phone!: number;

  @Column
    phone!: number;

  @Column
    country_id!: number;

  @Column({
    type: DataType.STRING(5)
  })
    status!: string;



  @BelongsTo(() => Users)
    user: Users; 

  @BelongsTo(() => Roles)
    role: Roles;

  @BelongsTo(() => Memberships)
    membership: Memberships;
}

export default Profiles;
