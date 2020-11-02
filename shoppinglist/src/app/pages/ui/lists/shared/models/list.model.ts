import { BaseModel } from 'src/app/shared/models/base-model.model';
import { IListStatus } from '../enums/list.enum';
import { Item } from './item.model';


export class List extends BaseModel{

    public description:string;
    public balance:number;
    public date:Date;
    public items:Array<Item>
    public status:IListStatus
    public itemQtd:number
    
    constructor(){
        super()
        this.items=new Array<Item>()
        this.itemQtd=0
        this.status=IListStatus.UNCOMPLETED
        this.date=new Date()
        this.balance=0
        this.description=''
    }

    addItem(item:Item){
        this.items.unshift(item)
        this.balance=this.balance+item.price
        this.itemQtd=this.items.length
    }

    addItems(items:Item[]){
        this.items=items
        items.forEach(item => {
            this.balance+=item.price
            this.itemQtd=this.items.length
        });
    }

    removeItem(item:Item){
        this.items.splice(this.items.findIndex(it=>it.id==item.id),1)
        this.balance-=item.price
        this.itemQtd=this.items.length
    }

    closeList(status:IListStatus){
        this.status=status
    }

    static copyJsonPropsToList(jsonData:any):List {
        return Object.assign(new List(),jsonData)
    }


}