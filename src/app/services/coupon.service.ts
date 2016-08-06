import {Injectable, Inject} from '@angular/core';
import {Card, ICard} from "../models/card.model";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {environment} from "../environment";
import {ICoupon} from "../models/coupon.model";

@Injectable()
export class CouponService {

    private api: string = environment.api;

    private name: string = 'coupons';

    public coupons: Observable<ICoupon>;

    constructor(@Inject(Http) private http: Http) {}

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
    public getItem(id: number) {
        return this.http.get(this.api + this.name + '/' + id).map(response => { return response.json(); });
    }

    /**
     * @brief Save element
     *
     * @param item Card
     */
    public save(item: Card) {
        return this.http.post(this.api + this.name, JSON.stringify(item)).map(response => { console.log(response); });
    }
}
