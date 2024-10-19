import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './pizza.entity';
import { PizzasController } from 'src/modules/pizza/pizzas.controller';
import { PizzaService } from './pizza.service';
import { IngredientsService } from '../ingredients/ingredients.service';
import { Ingredients } from '../ingredients/ingredients.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pizza]),
    TypeOrmModule.forFeature([Ingredients]),
  ],
  controllers: [PizzasController],
  providers: [PizzaService, IngredientsService],
  exports: [PizzaService],
})
export class PizzaModule {}
