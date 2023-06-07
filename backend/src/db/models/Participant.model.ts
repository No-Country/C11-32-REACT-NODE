import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, NotEmpty, Table } from "sequelize-typescript";
import Rooms from "./Room.model";
import Users from "./User.model";

export interface ParticipantI {
  id?: string;
  room_id: string;
  user_id: string;
}

@Table({ tableName: "participants" })
class Participants extends Model implements ParticipantI {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
    id!: string;

  @AllowNull(false)
  @NotEmpty
  @ForeignKey(() => Rooms)
  @Column({type: DataType.UUID})
    room_id!: string;

  @AllowNull(false)
  @NotEmpty
  @ForeignKey(() => Users)
  @Column({type: DataType.UUID})
    user_id!: string;




  @BelongsTo(() => Rooms)
    room: Rooms;
  @BelongsTo(() => Users)
    user: Users;
}


export default Participants;