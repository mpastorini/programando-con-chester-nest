import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasController } from './pizzas/pizzas.controller';
import { UsersController } from './user.controller';

@Module({
  imports: [],
  controllers: [AppController, PizzasController,UsersController],
  providers: [AppService],
})
export class AppModule {}
