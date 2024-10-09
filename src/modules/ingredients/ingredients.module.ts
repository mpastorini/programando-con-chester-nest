import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredients } from './ingredients.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredients])],
  controllers: [IngredientsController],
  providers: [IngredientsService],
  exports: [IngredientsService],
})
export class IngredientsModule {}