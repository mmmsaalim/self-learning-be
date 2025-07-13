import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @Column()
  phone_no: string;
}
