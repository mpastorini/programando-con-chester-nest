import { BaseDto } from './base.dto';
import { IsInt } from 'class-validator';

export class PizzaDto extends BaseDto {
  @IsInt()
  price: number;
}
