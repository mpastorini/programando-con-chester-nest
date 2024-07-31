import { Module } from '@nestjs/common';
import { PizzaRepository } from './pizza.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './pizza.entity';
import { PizzasController } from 'src/pizzas/pizzas.controller';

@Module({
  controllers: [PizzasController],
})
export class PizzaModule {}
