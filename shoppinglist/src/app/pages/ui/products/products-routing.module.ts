import { ProductFormComponent } from './product-form/product-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path:'',component:ProductsComponent},
        {path:'new',component:ProductFormComponent}
    ])],
    exports: [RouterModule],
})
export class ProductsRoutingModule { }
