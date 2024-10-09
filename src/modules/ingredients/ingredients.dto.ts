import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PizzaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Ingredient name to show',
    type: String,
  })
  name: string;
}

export class CreateIngredientDto {
  name: string;
}

export class UpdateIngredientDto {
  name?: string;
}
