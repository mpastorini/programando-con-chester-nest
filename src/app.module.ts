import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasController } from './modules/pizza/pizzas.controller';
import { UsersController } from './user.controller';
import { PizzaModule } from './modules/pizza/pizza.module';
import { IngredientsController } from './modules/ingredients/ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './modules/pizza/pizza.entity';
import { LoginModule } from './modules/login/login.module';

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
      synchronize: false,
      migrations: ['src/migrations/.ts'],
    }),
    PizzaModule,
    LoginModule,
  ],
  controllers: [
    AppController,
    PizzasController,
    UsersController,
    IngredientsController,
  ],
  providers: [AppService],
})
export class AppModule {}
