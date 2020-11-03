import { switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {  ListService } from './shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/shared/components/base-list-component/base-list-component.component';
import { List } from './shared/models/list.model';
import { Button } from 'src/app/shared/components/button/models/button.model';
import { IListStatus } from './shared/enums/list.enum';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent extends BaseListComponent<List> {
  lists: List[]=new Array<List>();

  constructor(private listServ:ListService,private router:Router){
    super(listServ)
  }


  ngOnInit(): void {
    this.tableProprieties()
    this.listServ.lists.subscribe(lists=>this.lists= lists)
  }

  
  deleteObject(list:List){
    confirm('Deseja realmente remover este produto?')?this.listServ.removeList(list.id):''
  }

  editObject(list:List){
    this.router.navigate(['/lists/edit/',list.id])
  }
  
  tableProprieties():string[]{
    return [
      'ID',
      'Descrição',
      'Montante Gasto',
      'Qtd. de Produtos',
      'Status',
      'Data',
      'Acções'
    ]
  }

  // tableData():List[]{
  //   return this.listServ.lists.pipe(tap(lists=>{return lists})).
  //   // return [
  //   //   {id:1,description:'description1',balance:12,status:IListStatus.UNCOMPLETED,date:new Date()} as List,
  //   //   {id:2,description:'description2',balance:14,status:IListStatus.UNCOMPLETED,date:new Date()} as List,
  //   //   {id:3,description:'description3',balance:16,status:IListStatus.UNCOMPLETED,date:new Date()} as List,
  //   //   {id:4,description:'description4',balance:18,status:IListStatus.UNCOMPLETED,date:new Date()} as List,
  //   //   {id:5,description:'description5',balance:20,status:IListStatus.UNCOMPLETED,date:new Date()} as List,
  //   //   {id:6,description:'description6',balance:22,status:IListStatus.UNCOMPLETED,date:new Date()} as List,
  //   // ]
  // }

  handleButton(type?:string):Button{

    if(type==='edit'){
      return {
        type:'button',
        icon:'fas fa-edit',
        color:'btn-outline-primary',
        size:'btn-sm',
    } as Button
    }else if(type==='delete'){
      return {
        type:'button',
        icon:'fas fa-trash',
        color:'btn-outline-danger',
        size:'btn-sm'
    } as Button

    }else if(type==='add'){
      return {
        type:'button',
        icon:'fas fa-plus-circle',
        color:'btn-outline-success',
        size:'btn-sm'
      } as Button
    }else if(type==='view'){
      return {
        type:'button',
        icon:'fas fa-shopping-cart',
        color:'btn-outline-warning',
        size:'btn-sm'
      } as Button
    }else if(type==='end'){
      return {
        type:'button',
        icon:'fas fa-check',
        color:'btn-outline-secondary',
        size:'btn-sm'
      } as Button
    }else{
      return {
        type:'button',
        name:'nova lista',
        icon:'fas fa-plus',
        color:'btn-outline-secondary',
        size:'btn-md'
      } as Button
    }
    

  }

  alertMethod(){
    this.router.navigate(['/lists/new'])
  }

}
