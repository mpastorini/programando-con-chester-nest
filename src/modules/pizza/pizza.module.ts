import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './pizza.entity';
import { PizzasController } from 'src/modules/pizza/pizzas.controller';
import { PizzaService } from './pizza.service';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Pizza])],
  controllers: [PizzasController],
  providers: [PizzaService],
  exports: [PizzaService],
})
export class PizzaModule {}
