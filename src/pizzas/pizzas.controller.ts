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

@Controller('pizzas')
export class PizzasController {
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
  async deletePizza(@Param('id') id) {
    const findById = (pizza) => pizza.id === parseInt(id);
    const pizzaIndex = pizzasList.findIndex(findById);
    pizzasList.splice(pizzaIndex, 1);

    return 'pizza erased';
  }
}
