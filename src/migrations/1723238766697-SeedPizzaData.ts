import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedPizzaData1723238766697 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO pizzas (name, ingredients,created_at,updated_at)
            VALUES
            ('Muzzarella','Muzarella,tomate, oregano',NOW(),NOW()),
            ('Jamon','Muzarella, tomate, jamon, oregano',NOW(),NOW()),
            ('Morrones','Muzarella,tomate, morrones, oregano',NOW(),NOW()),
            ('Napolitana','Muzarella,rodajas de tomate, oregano',NOW(),NOW())`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM pizzas WHERE name IN ('Muzzarella','Jamon','Morrones','Napolitana')
    `);
  }
}
