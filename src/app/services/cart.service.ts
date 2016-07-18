import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IProduct} from "./product.service";

export interface ICart
{
  product: IProduct;
  amount: number;
}

@Injectable()
export class CartService {
  public cart: any; //Observable<ICart>;
  private _cartObserver: any;
  private _cart: ICart[];
  public total_amount: number;
  public total_price: number;

  constructor() {
    this.setDefaultCart();
    this.cart = new Observable(observer => this._cartObserver = observer);
  }

  public fetchStart() {
    if (this._cartObserver) {
      this._cartObserver.next(this._cart);
    }
  }

  /**
   * @brief Add to cart
   *
   * @param product Product
   * @param amount  Amount
   */
  public addProduct(product: IProduct, amount: number)
  {
    if (this.inCart(product)) {
      this._cart.forEach((el: ICart, i) => {
        if (el.product.id == product.id) {
          this._cart[i].amount++;
        }
      });
    } else {
      this._cart.push(
          {
            product: product,
            amount: amount
          }
      );
    }
    this.fetchStart();
  }

  /**
   * @brief Remove product from cart
   *
   * @param product Product
   * @param amount  Amount
   */
  public removeProduct(product: IProduct, amount: number) {
    this._cart.forEach((el: ICart, i) => {
      if (el.product.id == product.id) {
        this._cart[i].amount -= amount;
        if (this._cart[i].amount <= 0) {
          this._cart = this._cart.filter(item => item.product.id != el.product.id);
        }
        this.fetchStart();
      }
    });
  }

  public inCart(product: IProduct)
  {
    return this._cart.filter(el => el.product.id == product.id).length > 0;
  }

  private setDefaultCart()
  {
    this._cart = [];
  }

  /**
   * @brief Calculate totals
   *
   * @returns {{amount: number, price: number}}
   */
  public getTotal()
  {
    this.total_amount = this.total_price = 0;

    this._cart.forEach(el => {
      this.total_amount += el.amount;
      this.total_price  += el.product.price * el.amount;
    });

    return {
      amount: this.total_amount,
      price:  this.total_price
    };
  }

  public clean()
  {
    this._cart = [];
    this.fetchStart();
  }
}