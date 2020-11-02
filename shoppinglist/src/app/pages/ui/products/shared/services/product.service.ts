import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base-service.service';
import { Product } from '../models/product.model';

@Injectable({providedIn: 'root'})
export class ProductService extends BaseService<Product> {
    private _products:BehaviorSubject<Array<Product>>
    private _productsArr:Array<Product>
    
    constructor(protected injector:Injector) {
        super('',injector,Product.copyJsonPropsToProduct)
        this._productsArr=new Array<Product>()
        this._products=new BehaviorSubject<Array<Product>>(null)
    }

    get products():Observable<Array<Product>>{
       return  this._products.asObservable()
    }
    
    private setProduct(products:Array<Product>){
        this._products.next(products)
    }

    addProduct(product:Product){
        
        if(!!this._productsArr.find(prod=>prod.name==product.name)){ 
            console.log('Esse produto já existe na lista') 
        }else{
            let idObj={id:this._productsArr.length as number + 1}
            let newProduct=Object.assign(product,idObj)//copia os valores do objecto idObj para product e atribui a new product

            this._productsArr.push(newProduct)
            this.setProduct(this._productsArr)

            alert('Adicionado com sucesso!')
        }

    }

    removeProduct(id:number){
        this._productsArr.splice(this._productsArr.findIndex(prod=>prod.id==id),1)
        this.setProduct(this._productsArr)
    }

    updateProduct(newProduct:Product){
        const prodIndex=this._productsArr.findIndex(prod=>prod.id==newProduct.id)

        this._productsArr[prodIndex]=newProduct
        
        this.setProduct(this._productsArr)
    }
}