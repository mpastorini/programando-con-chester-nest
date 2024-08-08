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
  findAll(){
    return this.pizzaRepository.find();
  }

  createPizza(newPizza: Pizza): Promise<Pizza> {
    return this.pizzaRepository.save(newPizza);
  }

  updatePizza( updPizza: Pizza, id:string): Promise<any> {
    return this.pizzaRepository.update(+id, updPizza); 
  }

  deletePizza(id: number): any {
    return this.pizzaRepository.delete(id);
  }
}
