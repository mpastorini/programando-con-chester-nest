import { Controller } from '@nestjs/common';
import { Pizza } from 'src/modules/pizza/pizza.entity';
import { PizzaService } from './pizza.service';
import { BaseController } from '../base-services/base.controller';

@Controller('pizzas')
export class PizzasController extends BaseController<Pizza> {
  constructor(private readonly pizzaService: PizzaService) {
    super(pizzaService);
  }
}
