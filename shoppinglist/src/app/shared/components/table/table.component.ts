import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ng-table',
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {

    @Input() thtf:string[]=[] //header and footer attributes

    constructor() { }

    ngOnInit() { }
}