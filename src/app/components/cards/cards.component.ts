import {Component, OnInit, Inject} from '@angular/core';
import {CORE_DIRECTIVES, NgClass, NgIf} from '@angular/common';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap';
import {NG_TABLE_DIRECTIVES} from 'ng2-table';
import {FORM_DIRECTIVES} from '@angular/forms';
import {CardService} from "../../services/card.service";
import {PhonePipe} from "../../pipes/phone.pipe";
import {FullNamePipe} from "../../pipes/full-name.pipe";
import {MenuLeftComponent} from "../menu-left/menu-left.component";

@Component({
    selector: 'table-demo',
    templateUrl: 'app/components/cards/cards.component.html',
    directives: [
        NG_TABLE_DIRECTIVES,
        PAGINATION_DIRECTIVES,
        NgClass,
        NgIf,
        CORE_DIRECTIVES,
        FORM_DIRECTIVES,
        MenuLeftComponent
    ],
    pipes: [PhonePipe, FullNamePipe]
})
export class CardsComponent implements OnInit {
    public rows:Array<any> = [];

    /**
     * Pagination
     */
    public page:number = 1;
    /**
     * @brief Number of items per page
     * @type {number}
     */
    public itemsPerPage:number = 20;
    /**
     * @brief Number of pages per page
     * @type {number}
     */
    public maxSize:number = 5;
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
        {title: '№', name: 'id', sort: 'desc'},
        {title: 'Discount', name: 'discount_formatted'},
        {title: 'Full name', name: 'full_name'},
        {title: 'Email', name: 'email'},
        {title: 'Phone', name: 'phone_formatted'},
    ];

    /**
     * Config
     */
    public config:any = {
        paging: true,
        sorting: {columns: this.columns},
        filtering: {filterString: '', columnName: 'surname'}
    };

    /**
     * @brief Constructor
     */
    public constructor(@Inject(CardService) private CardService) {
        this.CardService.cards.subscribe(newCards => { this.data = newCards; this.length = this.data.length; this.onChangeTable(this.config); } );
        this.CardService.fetchStart();
    }

    /**
     * @brief Shows a table at load
     */
    public ngOnInit():void {
        this.onChangeTable(this.config);
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
     * @brief Change filter
     *
     * @param data
     * @param config
     * @returns {any}
     */
    public changeFilter(data:any, config:any):any {
        if (!config.filtering) {
            return data;
        }

        let filteredData:Array<any> = data.filter((item:any) =>
            item[config.filtering.columnName].match(this.config.filtering.filterString));

        return filteredData;
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

        let filteredData = this.changeFilter(this.data, this.config);
        let sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    }
}