import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {environment} from "../environment";

export interface ICategory
{
  name: string;
}

@Injectable()
export class CategoryService {
  private api: string = environment.api;

  public categories: Observable<ICategory>;
  public category: string; //Выбранная категория
  private _categoriesObserver: any;
  private _categories: ICategory[];

  constructor(@Inject(Http) private http: Http) {
    this.setDefaultCategories();
    this.category   = "";
    this.categories = this.http.get(this.api + 'categories').map(response => response.json());
  }

  public fetchStart() {
    if (this._categoriesObserver) {
      this._categoriesObserver.next(this._categories);
    }
  }

  private setDefaultCategories()
  {
    this._categories = [];
  }

  public setCategory(category: string) {
    this.category = category;
  }
}