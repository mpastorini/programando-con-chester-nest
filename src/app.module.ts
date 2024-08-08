<<<<<<< HEAD
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

=======
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasController } from './pizzas/pizzas.controller';
import { UsersController } from './user.controller';
import { PizzaModule } from './modules/pizza/pizza.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './modules/pizza/pizza.entity';
import { PizzaService } from './modules/pizza/pizza.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'esteban',
      password: 'qwe123',
      database: 'pizza',
      entities: [Pizza],
      synchronize: true,
    }),
    PizzaModule,
  ],
  controllers: [AppController, PizzasController, UsersController],
  providers: [AppService],
})
export class AppModule {}
>>>>>>> 19f064cf82ed570a8ca39d9fc7d2771d0b8e330f
