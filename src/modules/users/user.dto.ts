import { BaseDto } from '../../dto/base.dto';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class userDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
