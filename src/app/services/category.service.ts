import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from "@angular/http";
import 'rxjs/Rx';

export interface ICategory
{
  name: string;
}

@Injectable()
export class CategoryService {
  public categories: Observable<ICategory>;
  public category: string; //Выбранная категория
  private _categoriesObserver: any;
  private _categories: ICategory[];

  constructor(@Inject(Http) private http: Http) {
    this.setDefaultCategories();
    this.category   = "";
    this.categories = this.http.get('http://api.gifts48.ru/categories').map(response => response.json());
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