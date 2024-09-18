import { BaseDto } from './base.dto';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class userDto extends BaseDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
