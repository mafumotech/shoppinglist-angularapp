import { ListFormComponent } from './list-form/list-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListsComponent } from './lists.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path:'',component:ListsComponent},
        {path:'new',component:ListFormComponent},
        {path:'edit/:id',component:ListFormComponent},
    ])],
    exports: [RouterModule],
})
export class ListsRoutingModule { }
