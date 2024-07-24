
import {Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('pizzas')
export class PizzasController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'pepepizza'
    }
}