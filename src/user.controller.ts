import {Controller, Get, Req, UseFilters, Query } from '@nestjs/common';
import { query, Request } from 'express';

@Controller('users')
export class UsersController {
    @Get()
    findAll(@Query() query: any): Array<Object> {
        const user1 = {
            name: 'Carlos',
            lastName: 'Arteaga'

        }
        const user2 ={
            name: 'pepe',
            lastName: 'grillo'
        }
        const users= [user1,user2]
        const filteredUser = users.filter(user => user.name === query.name || user.lastName === query.lastName )
       
        return filteredUser
    }
}