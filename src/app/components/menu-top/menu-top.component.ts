import {Component, OnInit, Inject} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-menu-top',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'menu-top.component.html',
  styleUrls: ['menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  private categories = [];

  constructor(@Inject(CategoryService) private CategoryService) {
    this.CategoryService.categories.subscribe(newCategories => this.categories = newCategories);
    this.CategoryService.fetchStart();
  }

  ngOnInit() {
  }

  public setCategory(category: string)
  {
    console.log("setCategory", category);

    this.CategoryService.setCategory(category);
  }

  public isActive(category: string)
  {
    return category == this.CategoryService.category;
  }
}
