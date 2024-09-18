import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasController } from './modules/pizza/pizzas.controller';
import { PizzaModule } from './modules/pizza/pizza.module';
import { IngredientsController } from './modules/ingredients/ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './modules/pizza/pizza.entity';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { User } from './modules/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'esteban',
      password: 'qwe123',
      database: 'pizza',
      entities: [Pizza, User],
      synchronize: true,
      migrations: ['src/migrations/.ts'],
    }),
    PizzaModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, PizzasController, IngredientsController],
  providers: [AppService],
})
export class AppModule {}
