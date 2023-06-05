import { AllowNull, Column, DataType, HasMany, Model, NotEmpty, Table } from "sequelize-typescript";
import Participants from "./Participant.model";

export interface RoomI {
  id?: string;
  title: string;
  body: string;
  type: string;
  topic: string;
  quantity: number;
  current_quantity: number;
  //   meet_id: string;
  duration: Date;
  level: string;
  status?: string;
}

@Table({ tableName: "rooms" })
class Rooms extends Model implements RoomI {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
    id!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(75) })
    title!: string;

  @Column({ type: DataType.TEXT })
    body!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(3) })
    type!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(150) })
    topic!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.INTEGER })
    quantity!: number;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
    current_quantity!: number;

  //   @AllowNull(false)
  //   @NotEmpty
  //   @ForeignKey(() => Meets)
  //   @Column({ type: DataType.UUID })
  //     meet_id!: string;

  @Column({ type: DataType.TIME })
    duration!: Date;

  @Column({ type: DataType.STRING(3) })
    level!: string;

  @Column({ type: DataType.STRING(25), defaultValue: "Active" })
    status!: string;

  //   @BelongsTo(() => Meets)
  //   meet : Meets;

  //   @BelongsToMany(() => Participants, { as: 'members', through: () => Membership })

  @HasMany(() => Participants)
    participants: Participants;

}

export default Rooms;
