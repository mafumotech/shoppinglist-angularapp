import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadCrumbComponent } from './ui/bread-crumb/bread-crumb.component';


@NgModule({
    declarations: [BreadCrumbComponent],
    imports: [RouterModule,CommonModule],
    exports: [
        // Modules
        CommonModule,

        // components
        BreadCrumbComponent
    ]
})
export class SharedModule { }
