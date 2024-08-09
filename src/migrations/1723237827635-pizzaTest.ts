import { MigrationInterface, QueryRunner } from 'typeorm';

export class PizzaTest1723237827635 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE pizzas (
            id INT AUTO_INCREMENT NOT NULL,
            name VARCHAR(25) NOT NULL UNIQUE,
            ingredients TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL,
            updated_at TIMESTAMP NOT NULL,
            PRIMARY KEY(id)
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE pizzas`);
  }
}
