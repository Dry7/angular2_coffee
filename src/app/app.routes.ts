import { provideRouter, RouterConfig } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {RevenueComponent} from "./components/revenue/revenue.component";
import {CardsComponent} from "./components/cards/cards.component";
import {CouponsComponent} from "./components/coupons/coupons.component";

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
        path: 'coupons',
        component: CouponsComponent
    },
    {
        path: '',
        component: DashboardComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];