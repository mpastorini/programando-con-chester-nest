import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './pizza.entity';
import { PizzasController } from 'src/modules/pizza/pizzas.controller';
import { PizzaService } from './pizza.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pizza])],
  controllers: [PizzasController],
  providers: [PizzaService],
  exports: [PizzaService],
})
export class PizzaModule {}
