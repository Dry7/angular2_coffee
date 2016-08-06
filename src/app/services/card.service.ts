import {Injectable, Inject} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Http, Headers, RequestOptions} from "@angular/http";
import {environment} from "../environment";
import {Card, ICard} from "../models/card.model";

@Injectable()
export class CardService {

    private api: string = environment.api;

    private name: string = 'cards';

    public cards: Observable<ICard>;

    constructor(@Inject(Http) private http: Http) {
        this.cards = this.http.get(this.api + this.name).map(response => { return response.json(); });
    }

    public fetchStart() {
    }

    /**
     * @brief Get all elements
     *
     * @returns {Observable<R>}
     */
    public getAll() {
        return this.http.get(this.api + this.name).map(response => { return response.json(); });
    }

    /**
     * @brief Get detail info
     *
     * @param id
     * @returns {Observable<R>}
     */
    public getCard(id: number) {
        return this.http.get(this.api + this.name + '/' + id).map(response => { return response.json(); });
    }

    /**
     * @brief Save element
     *
     * @param item Card
     */
    public save(item: Card) {
        console.log(JSON.stringify(item));
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.api + this.name + '/' + item.id, JSON.stringify(item), headers).map(response => { console.log(response.text()); });
    }
}
