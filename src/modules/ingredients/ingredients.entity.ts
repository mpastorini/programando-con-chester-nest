import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { Pizza } from '../pizza/pizza.entity';

@Entity('ingredients')
export class Ingredients extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25 })
  name: string;

  @ManyToMany(() => Pizza, (pizza) => pizza.ingredients)
  pizzas: Pizza[]; // Relación inversa con Pizza

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
