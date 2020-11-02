import { IITtemStatus } from '../enums/item.enum'

export class Item{

    id:number
    name:string
    qtd:number
    price:number
    status:IITtemStatus

    calculatePrice(qtd:number){
        this.price+=qtd
    }

    changeStatus(status:IITtemStatus){
        if(status===IITtemStatus.BUYED){
            this.status=IITtemStatus.BUYED
        }else{
            this.status=IITtemStatus.NOTBUYED
        }
    }
    
}
