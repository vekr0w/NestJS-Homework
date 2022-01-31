import { IsString } from 'class-validator';
import { Country } from '../country.entity';

export class CreateAccountDTO {
  @IsString()
  email: string;

  @IsString()
  password: string;

  country: Country;
}
