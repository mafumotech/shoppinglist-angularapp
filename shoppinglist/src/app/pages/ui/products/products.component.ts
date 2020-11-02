import { Router } from '@angular/router';
import { ProductService } from './shared/services/product.service';
import { Product } from './shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/shared/components/base-list-component/base-list-component.component';
import { Button } from 'src/app/shared/components/button/models/button.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseListComponent<Product> implements OnInit {
  products: Product[]=[];
 
  constructor(private prodServ:ProductService,private router:Router) { 
    super(prodServ)
  }

  ngOnInit(): void {
    this.prodServ.products.subscribe(products=>this.products=products)
  }

  removeProd(idproduct:number){
    this.prodServ.removeProduct(idproduct)
  }

  tableProprieties(): string[] {
    return [
      'ID',
      'Nome',
      'Acções'
    ]
  }

  tableData(){

    let obj=[
      {id:1,name:'prod1'} as Product,
      {id:2,name:'prod2'} as Product,
      {id:3,name:'prod3'} as Product,
      {id:4,name:'prod4'} as Product,
      {id:5,name:'prod5'} as Product,
    ]


    return obj;
  }

  handleButton(type?:string):Button{

    if(type==='edit'){
      return {
        type:'button',
        name:'edit',
        icon:'fas fa-edit',
        color:'btn-outline-primary',
        size:'btn-sm'
      } as Button
    }else if(type==='delete'){
      return {
        type:'button',
        name:'remove',
        icon:'fas fa-trash',
        color:'btn-outline-danger',
        size:'btn-sm'
     } as Button
    }else{
      return {
        type:'button',
        name:'novo producto',
        icon:'fas fa-plus',
        color:'btn-outline-secondary',
        size:'btn-md'
      } as Button
    }

  }

  addProduct(){
    this.router.navigate(['/products/new'])
  }

}
