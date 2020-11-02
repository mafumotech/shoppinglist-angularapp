import { BaseModel } from 'src/app/shared/models/base-model.model';

export class Product extends BaseModel{
    
    public name:string

    constructor(){
        super()
    }
    static copyJsonPropsToProduct(jsonData:any):Product {
        return Object.assign(new Product(),jsonData)
    }

}