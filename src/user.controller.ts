import {
  Controller,
  Get,
  Req,
  UseFilters,
  Query,
  Post,
  Body,
  Patch,
  Param,
} from '@nestjs/common';
import { query, Request } from 'express';

const user1 = {
  id: 1,
  name: 'Carlos',
  lastName: 'Arteaga',
};
const user2 = {
  id: 2,
  name: 'pepe',
  lastName: 'grillo',
};
const users = [user1, user2];

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query() query: any): Array<Object> {
    const filterByName = (user) => user.name === query.name;
    const filteredUsers = query.name ? users.filter(filterByName) : users;
    return filteredUsers;
  }

  // @Post decorators
  @Post()
  create(@Body() body: any) {
    users.push(body);

    return 'la persona se creo correctamente';
  }
  @Patch(':chompiras')
  update(@Param('chompiras') id, @Body() body: any) {
    console.log('id de usuario', id);

    const findById = function (user) {
      return user.id === parseInt(id);
    };
    const userIndex = users.findIndex(findById);

    console.log(userIndex);
    users[userIndex] = body;
    if (userIndex === -1) {
      return 'no se encontro el user';
    }
    return 'el user se actualizo correctamente';
  }
}
