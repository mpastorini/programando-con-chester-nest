import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Ingredients } from '../ingredients/ingredients.entity';

@Entity('pizzas')
export class Pizza extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25 })
  name: string;

  @ManyToMany(() => Ingredients, (ingredient) => ingredient.pizzas)
  @JoinTable({ name: 'pizza_ingredients' })
  ingredients: Ingredients[];

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
