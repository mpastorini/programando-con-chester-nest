import { Pizza } from 'src/modules/pizza/pizza.entity';

const pizzasList: Partial<Pizza>[] = [
  { id: 1, name: 'muzza', ingredients: JSON.stringify([]) },
  { id: 2, name: 'jamon', ingredients: JSON.stringify([]) },
  { id: 3, name: 'morrones', ingredients: JSON.stringify([]) },
];

export default pizzasList;
