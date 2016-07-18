import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {MenuTopComponent} from "./components/menu-top/menu-top.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ROUTER_DIRECTIVES, MenuTopComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'app apppadaasd!';
}
