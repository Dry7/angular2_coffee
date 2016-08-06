import { provideRouter, RouterConfig } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {RevenueComponent} from "./components/revenue/revenue.component";
import {CardsComponent} from "./components/cards/cards.component";
import {CouponsComponent} from "./components/coupons/coupons.component";
import {ProductsComponent} from "./components/products/products.component";
import {MenuTopComponent} from "./components/menu-top/menu-top.component";
import {CardEditComponent} from "./components/card-edit/card-edit.component";

const routes: RouterConfig = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'revenue',
        component: RevenueComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'cards/:id',
        component: CardEditComponent
    },
    {
        path: 'coupons',
        component: CouponsComponent
    },
    {
        path: 'menu-top',
        component: MenuTopComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: '',
        component: DashboardComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];