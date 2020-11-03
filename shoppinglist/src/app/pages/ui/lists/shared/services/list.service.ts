import { List } from './../models/list.model';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ListService extends BaseService<List> {

    private _lists:BehaviorSubject<Array<List>>
    private _listsArr:Array<List>
    
    constructor(protected injector:Injector) {
        super('',injector,List.copyJsonPropsToList)
        this._listsArr=new Array<List>()
        this._lists=new BehaviorSubject<Array<List>>(null)
    }

    get lists():Observable<Array<List>>{
        return  this._lists.asObservable()
     }
     
     private setList(lists:Array<List>){
         this._lists.next(lists)
     }
 
     getProdById(id:number) {
        return this._listsArr.find(prod=>prod.id==id)
     }
 
     addList(list:List){
         
         if(!!this._listsArr.find(listt=>listt.description.toLowerCase()===list.description.toLowerCase())){ 
             alert('Essa lista já existe!') 
         }else{
             let idObj={id:this._listsArr.length as number + 1,description:list['description']}

             let newList=Object.assign(new List(),idObj)//copia os valores do objecto idObj para list e atribui a newlist

            this._listsArr.unshift(newList)
             this.setList(this._listsArr)
 
             alert('Adicionado com sucesso!')
         }
 
     }
 
     removeList(id:number){
         this._listsArr.splice(this._listsArr.findIndex(list=>list.id==id),1)
         this.setList(this._listsArr)
     }
 
     updateList(list:List){

         const listIndex=this._listsArr.findIndex(lt=>lt.id==list.id)
 
         this._listsArr[listIndex]=list
         
         this.setList(this._listsArr)
 
         alert('Actualizado!')
     }
    
}