import { Body, Controller, Param, Put } from '@nestjs/common';
import { Pizza } from 'src/modules/pizza/pizza.entity';
import { PizzaService } from './pizza.service';
import { BaseController } from '../base-services/base.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pizzas')
@Controller('pizzas')
export class PizzasController extends BaseController<Pizza> {
  constructor(private readonly pizzaService: PizzaService) {
    super(pizzaService);
  }

  @Put(':id/ingredients')
  async updatePizzaIngredients(
    @Param('id') pizzaId: number,
    @Body('ingredientId') ingredientsId: number[]
  ) {
    return this.pizzaService.updatePizzaIngredients(pizzaId, ingredientsId);
  }
}
