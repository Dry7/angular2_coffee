import { Component, OnInit } from '@angular/core';
import {ProductsComponent} from "../products/products.component";
import {CartComponent} from "../cart/cart.component";

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  directives: [ProductsComponent, CartComponent],
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
