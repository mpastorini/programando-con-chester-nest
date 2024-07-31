import { Repository, EntityRepository } from "typeorm";
import { Pizza } from "./pizza.entity";

@EntityRepository(Pizza)
export class PizzaRepository extends Repository<Pizza> {


}
