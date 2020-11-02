import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ng-card',
    templateUrl: 'card.component.html'
})

export class CardComponent implements OnInit {

    @Input() cardTitle:string=''
    @Input() cardIcon:string=''
    @Input() cardStyles:string=''

    constructor() { }

    ngOnInit() { }
}