import {Component, OnInit, Inject} from '@angular/core';
import {CORE_DIRECTIVES, NgClass, NgIf, NgModel} from '@angular/common';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap';
import {NG_TABLE_DIRECTIVES} from 'ng2-table';
import {FORM_DIRECTIVES} from '@angular/forms';
import {StringHelper} from "../../helpers/StringHelper";
import {CardService} from "../../services/card.service";

export const TableData: Array<any> = [
    {"id":1,"discount":100,"surname":"Card","name":"№","patronymic":"1","email":"","phone":""},{"id":2,"discount":5,"surname":"Card ","name":"№","patronymic":"2","email":"","phone":""},{"id":3,"discount":50,"surname":"Card","name":"№","patronymic":"3","email":"","phone":""},{"id":4,"discount":5,"surname":"Card ","name":"№","patronymic":"4","email":"","phone":""},{"id":5,"discount":50,"surname":"Ivanov","name":"Alexander","patronymic":"","email":"","phone":"9042804969"},{"id":6,"discount":5,"surname":"Card ","name":"№","patronymic":"6","email":"","phone":""},{"id":7,"discount":50,"surname":"Monaenkova","name":"Elena","patronymic":"Sergeevna","email":"","phone":"9205048330"},{"id":8,"discount":50,"surname":"Syleimanov","name":"Alexander","patronymic":"Syleimanovich","email":"","phone":""},{"id":9,"discount":60,"surname":"Shilova","name":"Olga","patronymic":"","email":"","phone":""},{"id":10,"discount":5,"surname":"Card ","name":"№","patronymic":"10","email":"","phone":""},{"id":11,"discount":5,"surname":"Card ","name":"№","patronymic":"11","email":"","phone":""},{"id":12,"discount":5,"surname":"Kerenyako","name":"Alexey","patronymic":"Alexeevich","email":"","phone":"8910351063"},{"id":13,"discount":5,"surname":"Myachina","name":"Anna","patronymic":"Mihailovna","email":"","phone":"9046983026"},{"id":14,"discount":5,"surname":"Card ","name":"№","patronymic":"14","email":"","phone":""},{"id":15,"discount":5,"surname":"Card ","name":"№","patronymic":"15","email":"","phone":""},{"id":16,"discount":5,"surname":"Ivanova","name":"A","patronymic":"B","email":"","phone":"9042809350"},{"id":17,"discount":5,"surname":"Filinuk","name":"Elizavata","patronymic":"Sergeevna","email":"","phone":"9191622521"},{"id":18,"discount":5,"surname":"Card ","name":"№","patronymic":"18","email":"","phone":""},{"id":19,"discount":5,"surname":"Pasko","name":"valeria","patronymic":"Vasilievna","email":"","phone":"9205130616"},{"id":20,"discount":5,"surname":"Borisova","name":"Vladislava","patronymic":"Sergeevna","email":"","phone":"9102571738"},{"id":21,"discount":5,"surname":"Card ","name":"№","patronymic":"21","email":"","phone":""},{"id":22,"discount":5,"surname":"Gorbenko","name":"Larisa","patronymic":"Valerievna","email":"","phone":"9205070169"},{"id":23,"discount":5,"surname":"Card ","name":"№","patronymic":"23","email":"","phone":""},{"id":24,"discount":5,"surname":"Card ","name":"№","patronymic":"24","email":"","phone":""},{"id":25,"discount":5,"surname":"Card ","name":"№","patronymic":"25","email":"","phone":""},{"id":26,"discount":5,"surname":"Card ","name":"№","patronymic":"26","email":"","phone":""},{"id":27,"discount":20,"surname":"Yarmoshenko","name":"Sergey","patronymic":"Alexandrovich","email":"","phone":"9191640084"},{"id":28,"discount":20,"surname":"Kelbert","name":"Tatiana","patronymic":"","email":"","phone":""},{"id":29,"discount":5,"surname":"Card ","name":"№","patronymic":"29","email":"","phone":""},{"id":30,"discount":5,"surname":"Card ","name":"№","patronymic":"30","email":"","phone":""},{"id":31,"discount":5,"surname":"Card ","name":"№","patronymic":"31","email":"","phone":""},{"id":32,"discount":5,"surname":"Filonuk","name":"Sergey","patronymic":"Vladimirovich","email":"","phone":"3"},{"id":33,"discount":20,"surname":"Baulina","name":"Ekaterina","patronymic":"Sergeevna","email":"miss.baulina2011@yandex.ru","phone":"9601506860"},{"id":34,"discount":5,"surname":"Card ","name":"№","patronymic":"34","email":"","phone":""},{"id":35,"discount":5,"surname":"Card ","name":"№","patronymic":"35","email":"","phone":""},{"id":36,"discount":5,"surname":"Card ","name":"№","patronymic":"36","email":"","phone":""},{"id":37,"discount":10,"surname":"Esaulova","name":"Oksana","patronymic":"","email":"","phone":""},{"id":38,"discount":5,"surname":"Card ","name":"№","patronymic":"38","email":"","phone":""},{"id":39,"discount":5,"surname":"Card ","name":"№","patronymic":"39","email":"","phone":""},{"id":40,"discount":5,"surname":"Card ","name":"№","patronymic":"40","email":"","phone":""},{"id":41,"discount":5,"surname":"Golubenkov","name":"Igor","patronymic":"Vasilyevich","email":"","phone":"9205242777"},{"id":42,"discount":5,"surname":"Sviridova","name":"Yana","patronymic":"Sergeevna","email":"","phone":"9610361602"},{"id":43,"discount":5,"surname":"Card ","name":"№","patronymic":"43","email":"","phone":""},{"id":44,"discount":5,"surname":"Card ","name":"№","patronymic":"44","email":"","phone":""},{"id":45,"discount":5,"surname":"Card ","name":"№","patronymic":"45","email":"","phone":""},{"id":46,"discount":5,"surname":"Kim","name":"Anastasia","patronymic":"Aleksandrova","email":"","phone":"9191640732"},{"id":47,"discount":5,"surname":"Card ","name":"№","patronymic":"47","email":"","phone":""},{"id":48,"discount":5,"surname":"Pitkevich","name":"Zhanna","patronymic":"Igorevna","email":"","phone":"9102590777"},{"id":49,"discount":5,"surname":"Card ","name":"№","patronymic":"49","email":"","phone":""},{"id":50,"discount":20,"surname":"Zaitceva","name":"Nelli","patronymic":"50","email":"zayceva-nelli@mail.ru","phone":"9525920249"},{"id":51,"discount":5,"surname":"Kalineva","name":"Natalya","patronymic":"Pavlovna","email":"","phone":"9038628910"},{"id":52,"discount":5,"surname":"Nikitenka","name":"Sergey","patronymic":"Vladimirovich","email":"","phone":"9044294561"},{"id":53,"discount":5,"surname":"Card ","name":"№","patronymic":"53","email":"","phone":""},{"id":54,"discount":5,"surname":"Card ","name":"№","patronymic":"54","email":"","phone":""},{"id":55,"discount":100,"surname":"Shilov","name":"Alexander","patronymic":"Mihailovich","email":"byddochka@icloud.com","phone":"9525960550"},{"id":56,"discount":5,"surname":"Card ","name":"№","patronymic":"56","email":"","phone":""},{"id":57,"discount":5,"surname":"Malahova","name":"Olga","patronymic":"Konstantinovna","email":"","phone":"9103534304"},{"id":58,"discount":5,"surname":"Leshko","name":"Lilya","patronymic":"Valerievna","email":"","phone":"9042984444"},{"id":59,"discount":5,"surname":"Card ","name":"№","patronymic":"59","email":"","phone":""},{"id":60,"discount":5,"surname":"Bredihin","name":"Maksim","patronymic":"Viktorovich","email":"","phone":"9102533030"},{"id":61,"discount":5,"surname":"Korshunova","name":"Sofia","patronymic":"Sergeevna","email":"","phone":"9191664767"},{"id":62,"discount":5,"surname":"Ilyshina","name":"Yliana","patronymic":"Urievna","email":"","phone":"9113019467"},{"id":63,"discount":5,"surname":"Bayrina","name":"Sofia","patronymic":"Alekseevna","email":"","phone":"9192593244"},{"id":64,"discount":5,"surname":"Konevceva","name":"Ylia","patronymic":"Vitalievna","email":"","phone":"9038612500"},{"id":65,"discount":5,"surname":"Persianinova","name":"Ekaterina","patronymic":"A","email":"","phone":"9601594860"},{"id":66,"discount":5,"surname":"Semenova","name":"Ylia","patronymic":"Yrievna","email":"","phone":"9205478681"},{"id":67,"discount":5,"surname":"Chynosova","name":"Anastasia","patronymic":"Sergeevna","email":"","phone":"9513092848"},{"id":68,"discount":5,"surname":"Kotov","name":"M","patronymic":"Y","email":"","phone":"9036439695"},{"id":69,"discount":5,"surname":"Card ","name":"№","patronymic":"69","email":"","phone":""},{"id":70,"discount":5,"surname":"Card ","name":"№","patronymic":"70","email":"","phone":""},{"id":71,"discount":5,"surname":"Chymiocheva","name":"Elena","patronymic":"Genadievna","email":"","phone":"9525948671"},{"id":72,"discount":5,"surname":"Card ","name":"№","patronymic":"72","email":"","phone":""},{"id":73,"discount":5,"surname":"Inutina","name":"Elena","patronymic":"Valerievna","email":"","phone":"9525951225"},{"id":74,"discount":5,"surname":"Card ","name":"№","patronymic":"74","email":"","phone":""},{"id":75,"discount":5,"surname":"Diakova","name":"Evgenia","patronymic":"Alexandrovna","email":"","phone":"9525947854"},{"id":76,"discount":5,"surname":"Card ","name":"№","patronymic":"76","email":"","phone":""},{"id":77,"discount":5,"surname":"Proskyrin","name":"Dmitrii","patronymic":"Alexandrovich","email":"","phone":"9205136704"},{"id":78,"discount":5,"surname":"Ziryn","name":"Elena","patronymic":"Olegovna","email":"","phone":"9623521109"},{"id":79,"discount":5,"surname":"Card ","name":"№","patronymic":"79","email":"","phone":""},{"id":80,"discount":5,"surname":"Card ","name":"№","patronymic":"80","email":"","phone":""},{"id":81,"discount":5,"surname":"Chernikova","name":"Alena","patronymic":"Igorevna","email":"","phone":"9046916332"},{"id":82,"discount":5,"surname":"Pechenkina","name":"Anna","patronymic":" Yrievna","email":"","phone":"9155556404"},{"id":83,"discount":5,"surname":"Medvedev","name":"Maksim","patronymic":"Vladimirovich","email":"","phone":"9066880484"},{"id":84,"discount":5,"surname":"Chernishova","name":"Anastasya","patronymic":"Vladimirovna","email":"","phone":"9006001771"},{"id":85,"discount":5,"surname":"Romanovskiy","name":"Andrey","patronymic":"Dmitrievich","email":"","phone":"4742242417"},{"id":86,"discount":5,"surname":"Artamonova","name":"Viktoria","patronymic":"Anatolievna","email":"","phone":"9046844686"},{"id":87,"discount":5,"surname":"Nosonov","name":"Vladislav","patronymic":"","email":"","phone":"9042192135"},{"id":89,"discount":5,"surname":"Selinnikova","name":"Olga","patronymic":"Vladimirovna","email":"","phone":"9205044233"},{"id":90,"discount":5,"surname":"Byanovskaya","name":"I","patronymic":"O","email":"","phone":"9616036412"},{"id":91,"discount":5,"surname":"Gendylina","name":"Albina","patronymic":"Rivratovna","email":"","phone":"9042928531"},{"id":92,"discount":5,"surname":"Kotova","name":"Natalya","patronymic":"Andreevna","email":"","phone":"9046880530"},{"id":93,"discount":5,"surname":"Card ","name":"№","patronymic":"93","email":"","phone":""},{"id":94,"discount":5,"surname":"Vorobiova","name":"Inna","patronymic":"Sergeevna","email":"","phone":"9508058098"},{"id":95,"discount":5,"surname":"Terskih","name":"Irina","patronymic":"Mihailovna","email":"","phone":"9525975348"},{"id":96,"discount":5,"surname":"Koptceva","name":"Daria","patronymic":"Valeriavna","email":"","phone":"9046947159"},{"id":97,"discount":5,"surname":"Pavlovna","name":"Kristina","patronymic":"Valeriavna","email":"","phone":"9508006363"},{"id":98,"discount":5,"surname":"Volomina","name":"Ylia","patronymic":"","email":"","phone":"9042823558"},{"id":99,"discount":5,"surname":"Stepanchenko","name":"Ekaterina","patronymic":"99","email":"","phone":"9202401156"},{"id":100,"discount":5,"surname":"Card ","name":"№","patronymic":"100","email":"","phone":""}
];

@Component({
    selector: 'table-demo',
    template: `
<h1>Cards</h1>
        <ng-table [config]="config.sorting"
           (tableChanged)="onChangeTable(config)"
           [rows]="rows" [columns]="columns">
        </ng-table>
        <pagination
            [totalItems]="length"
            [(ngModel)]="page"
            [maxSize]="maxSize"
            class="pagination-sm"
            [boundaryLinks]="true"
            [rotate]="false"
            [itemsPerPage]="itemsPerPage"
            (pageChanged)="onChangeTable(config, $event)"
            (numPages)="numPages = $event"
            ></pagination>`,
    directives: [
        NG_TABLE_DIRECTIVES,
        PAGINATION_DIRECTIVES,
        NgClass,
        NgIf,
        CORE_DIRECTIVES,
        FORM_DIRECTIVES
    ]
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

        // simple sorting

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

        let data = this.setColumns(this.data);
        let filteredData = this.changeFilter(data, this.config);
        let sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    }

    /**
     * @brief Calculate columns
     *
     * @param data
     * @returns {any[]}
     */
    public setColumns(data: Array<any>):Array<any>
    {
        return data.map((item:any) => {
            item.discount_formatted = item.discount + '%';
            item.full_name = item.surname + ' ' + item.name + ' ' + item.patronymic;
            item.phone_formatted = StringHelper.phone(item.phone);
            return item;
        });
    }
}