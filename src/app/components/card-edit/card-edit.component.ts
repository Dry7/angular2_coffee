import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {MenuLeftComponent} from "../menu-left/menu-left.component";
import {ActivatedRoute} from "@angular/router";
import {CardService} from "../../services/card.service";
import {ICard} from "../../models/card.model";
import {PhonePipe} from "../../pipes/phone.pipe";
import {NgIf, NgClass, CORE_DIRECTIVES} from "@angular/common";
import {FORM_DIRECTIVES} from "@angular/forms";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {NG_TABLE_DIRECTIVES} from "ng2-table/ng2-table";
import {DatePipe} from "../../pipes/date.pipe";
import {Router} from "@angular/router";
import {ICoupon} from "../../models/coupon.model";

@Component({
  moduleId: module.id,
  selector: 'app-card-edit',
  directives: [
      NG_TABLE_DIRECTIVES,
      PAGINATION_DIRECTIVES,
      ROUTER_DIRECTIVES,
      CORE_DIRECTIVES,
      FORM_DIRECTIVES,
      NgClass,
      NgIf,
      MenuLeftComponent
  ],
  pipes: [PhonePipe, DatePipe],
  templateUrl: 'card-edit.component.html',
  styleUrls: ['card-edit.component.css']
})
export class CardEditComponent implements OnInit, OnDestroy {
    private sub: any;

    /**
     * @brief Current card
     */
    private item: ICard;

    /**
     * @brief Current coupon
     */
    private coupon: ICoupon;

    public rows:Array<any> = [];

    /**
     * Pagination
     */
    public page:number = 1;
    /**
     * @brief Number of items per page
     * @type {number}
     */
    public itemsPerPage:number = 10;
    /**
     * @brief Number of pages per page
     * @type {number}
     */
    public maxSize:number = 10;
    /**
     * @brief Total rows
     * @type {number}
     */
    public length:number = 0;

    /**
     * @brief Data for output
     * @type {Array<any>}
     */
    private data:Array<any> = [];

    /**
     * Columns
     */
    public columns:Array<any> = [
        {title: 'Name', name: 'name'},
        {title: 'Phone', name: 'phone'},
        {title: 'Coupon', name: 'coupon'},
        {title: 'Date', name: 'date'},
    ];

    /**
     * Config
     */
    public config:any = {
        paging: true,
        sorting: {columns: this.columns},
        filtering: false
    };

    constructor(@Inject(CardService) private CardService, @Inject(ActivatedRoute) private route, @Inject(Router) private router) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            console.log(id);
            this.CardService.getCard(id).subscribe(item => {
                this.item = item;
                console.log(this.item);
                this.onChangeTable(this.config);
            });
        })
    }

    /**
     * @brief Change page
     *
     * @param page
     * @param data
     * @returns {any[]}
     */
    public changePage(page:any, data:Array<any> = this.data):Array<any> {
        let start = (page.page - 1) * page.itemsPerPage;
        let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;

        return data.slice(start, end);
    }

    /**
     * @brief Change sort
     *
     * @param data
     * @param config
     * @returns {any}
     */
    public changeSort(data:any, config:any):any {
        if (!config.sorting) {
            return data;
        }

        let columns = this.config.sorting.columns || [];
        let columnName:string = void 0;
        let sort:string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '') {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }

        if (!columnName) {
            return data;
        }

        /**
         * Sorting is performed on the raw data
         */
        columnName = columnName.replace('_formatted', '');

        return data.sort((previous:any, current:any) => {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            } else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }

    /**
     * @brief Change table sort
     *
     * @param column
     */
    public onChangeTableSort(column:any):void {
        this.columns.forEach((col:any) => {
            if (col.name !== column.name && col.sort !== false) {
                col.sort = '';
            }
        });

        let sortColumns:Array<any> = [];

        this.columns.forEach((column:any) => {
            if (column.sort) {
                sortColumns.push(column);
            }
        });

        this.onChangeTable({sorting: {columns: sortColumns}, paging: this.config.paging});
    }

    /**
     * @brief Refresh table
     *
     * @param config
     * @param page
     */
    public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }

        let sortedData = this.changeSort(this.item.coupons, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    }

    /**
     * @brief Save card
     */
    public save(): void {
        console.log('save');
        console.log(this.item);
        let save = this.CardService.save(this.item).subscribe(response => {
            console.log(response);
        });
//        this.router.navigate(['cards']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
