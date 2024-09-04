import { Injectable } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class BaseService<T> {
  constructor(private readonly repository: Repository<T>) {}

  findOneById(id: number): Promise<T> {
    return this.repository.findOneBy({ id } as any);
  }

  findAll(): Promise<T[]> {
    return this.repository.find();
  }

  create(createDto: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async update(id: number, updateDto: any): Promise<T> {
    await this.repository.update(id, updateDto);
    return this.findOneById(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
