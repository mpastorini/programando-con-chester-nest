import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Username to login',
    type: String,
  })
  username: string;

  @ApiProperty({
    description: 'The email need be unique',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password to be hashed',
  })
  @IsString()
  password: string;
}
