import { NgModule } from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';

import { ListsComponent } from './lists.component';
import { ListsRoutingModule } from './lists-routing.module';


@NgModule({
  declarations: [ListsComponent],
  imports: [
    SharedModule,
    ListsRoutingModule
  ],
  exports:[
    ListsComponent
  ]
})
export class ListsModule { }
