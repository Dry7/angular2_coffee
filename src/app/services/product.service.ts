import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {environment} from "../environment";

export interface IProduct
{
  id: number;
  name: string;
  price: number;
  category: string;
}

@Injectable()
export class ProductService {
  private api: string = environment.api;

  public products: Observable<IProduct>;

  constructor(@Inject(Http) private http: Http) {
      this.products = this.http.get(this.api + 'products').map(response => { return response.json(); });
  }

  public fetchStart() {
  }
}
