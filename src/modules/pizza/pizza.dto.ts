import { BaseDto } from '../../dto/base.dto';
import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PizzaDto extends BaseDto {
  @ApiProperty({
    description: 'precio de la pizza',
    minimum: 1,
    default: 14,
  })
  @IsInt()
  price: number;
}
