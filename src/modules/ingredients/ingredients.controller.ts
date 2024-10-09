import { Controller } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from '../base-services/base.controller';
import { Ingredients } from './ingredients.entity';

@ApiTags('Ingredients')
@Controller('ingredients')
export class IngredientsController extends BaseController<Ingredients> {
  constructor(private readonly ingredientsService: IngredientsService) {
    super(ingredientsService);
  }
}
