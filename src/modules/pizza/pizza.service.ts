import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pizza } from './pizza.entity';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(Pizza)
    private readonly pizzaRepository: Repository<Pizza> // el pizzaRepository es el decorator que permite manipular la tabla,
  ) {}

  findOneById(id: number): Promise<Pizza> {
    return this.pizzaRepository.findOneBy({ id });
  }

  createPizza(newPizza: Pizza): Promise<Pizza> {
    return this.pizzaRepository.save(newPizza);
  }

  deletePizza(id: number): any {
    return this.pizzaRepository.delete(id);
  }
}
