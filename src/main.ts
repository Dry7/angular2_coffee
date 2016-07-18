import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes'
import {HTTP_PROVIDERS} from "@angular/http";
import {ProductService} from "./app/services/product.service";
import {CartService} from "./app/services/cart.service";
import {CategoryService} from "./app/services/category.service";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  CategoryService,
  ProductService,
  CartService
]);

