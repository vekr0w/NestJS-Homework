import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';
import { Country } from './country.entity';

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  country: Country;

  @Column()
  countries: Country[];
}
