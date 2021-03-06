import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("sessions")
export default class Sessions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  userId: number;

  static async createNew(userId: number, token: string) {
    const session = this.create({ userId, token });
    await session.save();
    return session;
  }
}
