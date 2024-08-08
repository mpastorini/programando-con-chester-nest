import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Put,
  Delete,
  Patch,
  Req,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { Pizza } from 'src/modules/pizza/pizza.entity';
import pizzasList from './pizzasList';
import { PizzaService } from '../modules/pizza/pizza.service';

@Controller('pizzas')
export class PizzasController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  async findAll(@Query() query: any): Promise<Partial<Pizza>[]> {
    const filterMethod = (pizza: Pizza) => pizza.name === query.name;
    const pizzaFiltered = query.name
      ? pizzasList.filter(filterMethod)
      : pizzasList;
    return pizzaFiltered;
  }
  @Post()
  async create(@Body() body: any) {
    pizzasList.push(body);
    return 'la pizza se creo correctamente';
  }
  @Patch(':id')
  async update(@Param('id') id, @Body() body: any) {
    console.log('id de usuario es ', id);

    const findById = (pizza) => pizza.id === parseInt(id);
    const pizzaIndex = pizzasList.findIndex(findById);

    pizzasList[pizzaIndex] = body;
    if (pizzaIndex === -1) {
      return 'Pizza not found whit id:' + id;
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.pizzaService.deletePizza(+id);
      return {
        success: true,
        message: 'pizza deleted successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
