import {Injectable, Inject} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {ICart} from "./cart.service";
import {Http} from "@angular/http";

export interface ICard
{
    id: number;
    discount: number;
    surname: string;
    name: string;
    patronymic: string;
    email: string;
    phone: string;
}

@Injectable()
export class CardService {
    private url: string = 'http://api.coffee:8181/';

    public cards: Observable<ICart>;

    constructor(@Inject(Http) private http: Http) {
        this.cards = this.http.get(this.url + 'cards').map(response => { return response.json(); });
    }

    public fetchStart() {
    }
}
