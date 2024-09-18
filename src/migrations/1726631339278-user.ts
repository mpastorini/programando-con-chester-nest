import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1726631339278 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    `INSERT INTO users (username, email, password,createdAt,updatedAt)
            VALUES
            ('esteban','estebanavella1@gmail.com','qwe123',NOW(),NOW()),    
    `;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    `DELETE FROM users WHERE name IN ('esteban')`;
  }
}
