import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service.service';
import { Product } from '../models/product.model';

@Injectable({providedIn: 'root'})
export class ProductService extends BaseService<Product> {
    constructor(protected injector:Injector) {
        super('',injector,Product.copyJsonPropsToProduct)
    }
    
}