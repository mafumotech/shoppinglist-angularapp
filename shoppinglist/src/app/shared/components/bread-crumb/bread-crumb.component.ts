import { BreadCrumb } from './models/bread-crumb.model';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'ng-bread-crumb',
  templateUrl: './bread-crumb.component.html'
})
export class BreadCrumbComponent{

  @Input() routeList:Array<BreadCrumb>=[]
  @Input() breadTitle:string='Dashboard'


  isTheLastRoute(route:BreadCrumb):boolean{

    const index=this.routeList.indexOf(route)

    return index+1==this.routeList.length
  }
}
