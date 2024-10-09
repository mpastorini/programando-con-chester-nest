import { Injectable } from '@nestjs/common';
import { BaseService } from '../base-services/base.service';
import { Ingredients } from './ingredients.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientsService extends BaseService<Ingredients> {
  constructor(
    @InjectRepository(Ingredients)
    private readonly ingredientsRepository: Repository<Ingredients>
  ) {
    super(ingredientsRepository);
  }
}
