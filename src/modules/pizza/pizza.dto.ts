import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class PizzaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'pizzas name to show',
    type: String,
  })
  name: string;
  @ApiProperty({
    description: 'pizzas ingredients',
    default: 'muzza',
  })
  @IsString()
  ingredients: string;
  @ApiProperty({
    description: 'pizza s price',
    minimum: 1,
    default: 14,
  })
  @IsInt()
  price: number;
}

export class CreatePizzaDto {
  name: string;
  price: number;
}

export class UpdatePizzaDto {
  name?: string;
  price?: number;
}
