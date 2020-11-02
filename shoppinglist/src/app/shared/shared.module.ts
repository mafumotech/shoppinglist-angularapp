import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        BreadCrumbComponent,
        TableComponent,
        CardComponent,
        ButtonComponent
    ],
    imports: [RouterModule,ReactiveFormsModule,CommonModule],
    exports: [
        // Modules
        CommonModule,
        ReactiveFormsModule,

        // components
        BreadCrumbComponent,
        TableComponent,
        CardComponent,
        ButtonComponent
    ]
})
export class SharedModule { }
