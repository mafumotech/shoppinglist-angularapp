import { Component, Injector, AfterContentChecked } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-form-component/base-form-component.component';
import { Button } from 'src/app/shared/components/button/models/button.model';
import { Product } from '../shared/models/product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
    selector: 'ng-product-form',
    templateUrl: 'product-form.component.html'
})

export class ProductFormComponent extends BaseFormComponent<Product> {

 
  constructor(protected injector:Injector,protected prodServ:ProductService){
    super(injector,prodServ)
    this.object=new Product()
    this.copyJsonDataToObjectFn=Product.copyJsonPropsToProduct
  }

  protected buildResourceForm(): void {
    this.objectForm=this.formBuilder.group({
        name:[null,[Validators.required,Validators.minLength(3)]],
        id:[null],
    })
  }

  goBack(){
      this.router.navigate(['/products'])
  }

  submitForm(){
    if(this.route.snapshot.url[0].path=='edit'){
      this.prodServ.updateProduct(this.objectForm.value)
      this.isLoading=false
    }else{

      this.prodServ.addProduct(this.objectForm.value)
      this.objectForm.reset()
      this.isLoading=false
    }
    
  }

  loadObject(){
   if(this.route.snapshot.url[0].path=='edit'){
    let prod = this.prodServ.getProdById(this.route.snapshot.params['id'])
    if(prod)
        this.objectForm.patchValue(prod)
   }
  }

  handleButton(type?:string):Button{

      if(type==='save'){

          return {
            type:'submit',
            name:'save product',
            icon:'fas fa-save',
            color:'btn-outline-primary',
            size:'btn-md',
            isLoading:this.isLoading,
            isDisabled:(this.objectForm.invalid || this.isLoading)
          } as Button

    }else{

        return {
            type:'button',
            name:'voltar',
            icon:'fas fa-arrow-left',
            color:'btn-outline-secondary',
            size:'btn-sm'
        } as Button
      
    }

  }

}