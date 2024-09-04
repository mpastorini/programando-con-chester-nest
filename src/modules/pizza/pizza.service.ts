import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pizza } from './pizza.entity';
import { BaseService } from '../base-service/base.service';

@Injectable()
export class PizzaService extends BaseService<Pizza> {
  constructor(
    @InjectRepository(Pizza)
    private readonly pizzaRepository: Repository<Pizza>
  ) {
    super(pizzaRepository);
  }
}
