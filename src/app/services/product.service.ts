import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

export interface IProduct
{
  id: number;
  name: string;
  price: number;
  category: string;
}

@Injectable()
export class ProductService {
  public products: Observable<IProduct>;

  constructor(@Inject(Http) private http: Http) {
    this.products = this.http.get('http://api.gifts48.ru/products').map(response => { return response.json(); });
  }

  public fetchStart() {
  }
}
