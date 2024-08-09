import { Pizza } from 'src/modules/pizza/pizza.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'esteban',
  password: 'qwe123',
  database: 'pizza',
  entities: [Pizza],
  synchronize: false,
  migrations: ['src/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data source has been initialized');
  })
  .catch((err) => {
    console.error('fail Data Source', err);
  });
