import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-menu-left',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'menu-left.component.html',
  styleUrls: ['menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
