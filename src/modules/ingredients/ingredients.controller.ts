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

const ingre1 = {
    id: 1,
    name: 'oregano',
    precio: 34.3,
};

const ingre2 = {
    id: 2,
    name: 'provenzal',
    precio: 3,

}

const ingre3 = {
    id: 3,
    name: 'pimienta',
    precio: 44,
};
const ingredients = [ingre1, ingre2, ingre3];
@Controller('ingredients')
export class IngredientsController {
    @Get()
    findIngred(@Query() query: any): Array<Object> {
     

        const equalsNameIngred = function (ingredient) {
            return ingredient.name === query.name
        }


        let filteredNameIngred;
        if (query.name) {
            filteredNameIngred = ingredients.filter(equalsNameIngred)

        } else {
            filteredNameIngred = ingredients

        }


        return filteredNameIngred

    }

    @Post()  // EL METODO POST ES UN METODO DEL PROTOCOLO HTTP QUE CREA 
    create(@Body() body: any ): String {
        ingredients.push(body);
        return 'el ingrediente se agrego de forma satisfactoria';
    }
}

