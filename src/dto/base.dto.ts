import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class BaseDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
}
