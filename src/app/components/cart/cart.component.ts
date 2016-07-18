import {Component, OnInit, Inject} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {IProduct} from "../../services/product.service";

@Component({
  moduleId: module.id,
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {
  private cart = [];
  private total: any;

  constructor(@Inject(CartService) private CartService) {
    this.CartService.cart.subscribe(newCart => { this.cart = newCart; this.total = this.CartService.getTotal(); });
    this.CartService.fetchStart();
  }

  ngOnInit() {
  }

  /**
   * @brief Add product to cart
   *
   * @param product
   */
  public addProduct(product: IProduct) {
    this.CartService.addProduct(product, 1);
  }

  /**
   * @brief Remove product from cart
   *
   * @param product
   */
  public removeProduct(product: IProduct) {
    this.CartService.removeProduct(product, 1);
  }

  /**
   * @brief Clean cart
   */
  public clean()
  {
    this.CartService.clean();
  }
}