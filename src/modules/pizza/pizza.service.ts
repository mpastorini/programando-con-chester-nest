import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Pizza } from './pizza.entity';
import { BaseService } from '../base-services/base.service';
import { Ingredients } from '../ingredients/ingredients.entity';
import { CreatePizzaDto } from './pizza.dto';

@Injectable()
export class PizzaService extends BaseService<Pizza> {
  constructor(
    @InjectRepository(Pizza)
    private readonly pizzaRepository: Repository<Pizza>,
    @InjectRepository(Ingredients)
    private readonly ingredientsRepository: Repository<Ingredients>
  ) {
    super(pizzaRepository);
  }

  async createPizzaIngredients(createPizzaDto: CreatePizzaDto): Promise<Pizza> {
    const { name, ingredientIds } = createPizzaDto;

    const ingredients = await this.ingredientsRepository.find({
      where: { id: In(ingredientIds) },
    });

    const pizza = this.pizzaRepository.create({
      name,
      ingredients,
    });

    return this.pizzaRepository.save(pizza);
  }
}
