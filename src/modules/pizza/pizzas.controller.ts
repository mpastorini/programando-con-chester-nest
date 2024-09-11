import { Controller, Body } from '@nestjs/common';
import { Pizza } from 'src/modules/pizza/pizza.entity';
import { PizzaService } from './pizza.service';
import { BaseController } from '../base-services/base.controller';
import { PizzaDto } from '../dto/pizza.dto';

@Controller('pizzas')
export class PizzasController extends BaseController<Pizza> {
  constructor(private readonly pizzaService: PizzaService) {
    super(pizzaService);
  }

  create(@Body() pizzaDto: PizzaDto) {
    return this.pizzaService.create(pizzaDto);
  }
}
