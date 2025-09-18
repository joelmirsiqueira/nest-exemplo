import { Injectable } from '@nestjs/common';

export type Cat = {
    name: string;
    age: number;
    breed: string;
}


@Injectable()
export class CatsService {

    cats: Cat[] = [];

    addCat(cat: Cat): Cat {
        this.cats.push(cat);
        return cat;
    }

    getCats(): Cat[] {
        return this.cats;
    }

}
