import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { BaseService } from './base.service';
import { ApiBody } from '@nestjs/swagger';

@Controller()
export class BaseController<T> {
  constructor(private readonly baseService: BaseService<T>) {}

  @Get()
  async findAll(): Promise<Partial<T>[]> {
    return this.baseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<T> {
    return this.baseService.findOneById(id);
  }

  @Post()
  async create(@Body() body: any): Promise<T> {
    return this.baseService.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() body: any): Promise<T> {
    return this.baseService.update(id, body);
  }

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
