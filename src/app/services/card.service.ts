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

    public products: Observable<ICart>;

    constructor(@Inject(Http) private http: Http) {
        this.products = this.http.get('http://api.coffee:8181/cards').map(response => { return response.json(); });
    }

    public fetchStart() {
    }
}
