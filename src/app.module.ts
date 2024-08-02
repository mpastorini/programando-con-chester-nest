import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasController } from './pizzas/pizzas.controller';
import { UsersController } from './user.controller';
import { PizzaModule } from './modules/pizza/pizza.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './modules/pizza/pizza.entity';


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
    }), PizzaModule],
  controllers: [AppController, PizzasController, UsersController],
  providers: [AppService],
})
export class AppModule { }
