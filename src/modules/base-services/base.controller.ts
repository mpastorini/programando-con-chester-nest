import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  UseGuards,
} from '@nestjs/common';
import { BaseService } from './base.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller()
export class BaseController<T> {
  constructor(private readonly baseService: BaseService<T>) {}

  @Get()
  async findAll(): Promise<Partial<T>[]> {
    return this.baseService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id): Promise<T> {
    return this.baseService.findOneById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() body: any): Promise<T> {
    return this.baseService.create(body);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id, @Body() body: any): Promise<T> {
    return this.baseService.update(id, body);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.baseService.remove(+id);
      return {
        success: true,
        message: 'deleted successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
