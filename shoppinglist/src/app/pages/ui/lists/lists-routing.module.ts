import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListsComponent } from './lists.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path:'',component:ListsComponent}
    ])],
    exports: [RouterModule],
})
export class ListsRoutingModule { }
