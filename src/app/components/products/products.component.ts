import {Component, OnInit, Inject} from '@angular/core';
import {IProduct, ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {

  private products = [];
  public category  = null;

  constructor(@Inject(ProductService) private ProductService, @Inject(CartService) private CartService) {
      console.log('products.construct');
    this.ProductService.products.subscribe(newProducts => this.products = newProducts);
  }

  /**
   * @brief Add product to cart
   *
   * @param product
   */
  public addProduct(product: IProduct) {
    this.CartService.addProduct(product, 1);
  }

  public inCart(product: IProduct) {
    return this.CartService.inCart(product);
  }

  ngOnInit() {
      console.log('products.ngOnInit');
      this.ProductService.fetchStart();
  }

}