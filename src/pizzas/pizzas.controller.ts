import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { Pizza } from 'src/modules/pizza/pizza.entity';
import { PizzaService } from '../modules/pizza/pizza.service';

@Controller('pizzas')
export class PizzasController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  async findAll(): Promise<Partial<Pizza>[]> {
    return this.pizzaService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id): Promise<Pizza> {
    return this.pizzaService.findOneById(id);
  }

  @Post()
  async create(@Body() body: any) {
    return this.pizzaService.create(body);
  }
  @Patch(':id')
  async update(@Param('id') id, @Body() body: any) {
    return this.pizzaService.update(id, body);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.pizzaService.remove(+id);
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
