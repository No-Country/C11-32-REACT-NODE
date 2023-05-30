import { Column, DataType, Model, Table } from "sequelize-typescript";



export interface MembershipsI {
    id?: string | null,
    name: string,
    description: string,
    price: number, 
    duration: number, 
    devices: number,
    date_start: Date,
    date_end: Date
  }

  @Table({
    tableName: "memberships"
  })
class Memberships extends Model implements MembershipsI {

    @Column({
      primaryKey: true,
      defaultValue: DataType.UUIDV4,
      type: DataType.TEXT,
    })
      id!: string;

    @Column
      name!: string;

    @Column
      description!: string;

    @Column({
      type: DataType.FLOAT
    })
      price!: number;

    @Column 
      duration!: number;

    @Column
      devices!: number;

    @Column({
      type: DataType.TIME
    })
      date_start!: Date;

    @Column({
      type: DataType.TIME
    })
      date_end!: Date;
  }

export default Memberships;