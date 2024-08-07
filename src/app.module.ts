import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasController } from './pizzas/pizzas.controller';
import { UsersController } from './user.controller';
import { PizzaModule } from './modules/pizza/pizza.module';
import { IngredientsController } from './ingredients/ingredients.controller';


@Module({
  imports: [PizzaModule],
  controllers: [AppController, PizzasController,UsersController,IngredientsController],
  providers: [AppService],
})
export class AppModule {}

