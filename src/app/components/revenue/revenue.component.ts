import { Component, OnInit } from '@angular/core';
import {MenuLeftComponent} from "../menu-left/menu-left.component";

@Component({
  moduleId: module.id,
  selector: 'app-revenue',
  directives: [MenuLeftComponent],
  templateUrl: 'revenue.component.html',
  styleUrls: ['revenue.component.css']
})
export class RevenueComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
