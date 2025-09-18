import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import * as catsService from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: catsService.CatsService) {}
    @Get()
    getCats(): catsService.Cat[] {
        return this.catsService.getCats();
    }

    @Post()
    addCat(@Body() cat: catsService.Cat): catsService.Cat {
        return this.catsService.addCat(cat);
    }
}
