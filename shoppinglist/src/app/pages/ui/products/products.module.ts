import { NgModule } from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';
import { ProductFormComponent } from './product-form/product-form.component';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent,ProductFormComponent],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  exports:[
    ProductsComponent
  ]
})
export class ProductsModule { }
