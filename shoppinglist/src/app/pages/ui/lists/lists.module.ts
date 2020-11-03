import { NgModule } from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';

import { ListsComponent } from './lists.component';
import { ListsRoutingModule } from './lists-routing.module';
import { ListFormComponent } from './list-form/list-form.component';
import { ItemFormComponent } from './item-form/item-form.component';


@NgModule({
  declarations: [ListsComponent,ListFormComponent,ItemFormComponent],
  imports: [
    SharedModule,
    ListsRoutingModule
  ],
  exports:[
    ListsComponent
  ]
})
export class ListsModule { }
