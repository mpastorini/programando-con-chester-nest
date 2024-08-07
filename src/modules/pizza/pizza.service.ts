import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pizza } from './pizza.entity';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(Pizza)
    private readonly pizzaRepository: Repository<Pizza>
  ) {}

  async findOneById(id: number): Promise<Pizza> {
    return this.pizzaRepository.findOneBy({ id });
  }

  async createPizza(newPizza: Pizza): Promise<Pizza> {
    return this.pizzaRepository.save(newPizza);
  }

  async deletePizza(id: number): Promise<void> {
    const pizza = await this.findOneById(id);
    await this.pizzaRepository.remove(pizza);
  }
}
