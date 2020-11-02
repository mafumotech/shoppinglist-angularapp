import { BreadCrumb } from './shared/components/bread-crumb/models/bread-crumb.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'shoppinglist';

  actualYear:number=new Date().getFullYear();

  constructor(){}

  ngOnInit(): void {
    this.getBreadTitle();
    this.getPageLinks();
  }


  getBreadTitle():string{

    if(this.currentUrl()=='lists'){
      return 'Listas de Compras'
    }else if(this.currentUrl()=='products'){
      return 'Lista de Produtos'
    }else if(this.currentUrl()=='products/new'){
      return 'Cadastro dos Dados do Produtos'
    }else if(this.currentUrl()=='lists/new'){
      return 'Cadastro dos Dados da Lista'
    }else{
      return 'Dashboard'
    }

  }

  getPageLinks():Array<BreadCrumb>{

    if(this.currentUrl()=='lists'){
      return [{text:'listas'}]
    }else if(this.currentUrl()=='products'){
      return [{text:'Productos'}]
    }else if(this.currentUrl()=='products/new'){
      return [{text:'produtos',url:'/products'},{text:'Novo Produto'}]
    }else if(this.currentUrl()=='lists/new'){
      return [{text:'listas',url:'/lists'},{text:'Nova Lista'}]
    }

  }

  beginDate(){
    return this.actualYear!=2020?2020+' - ':'';
  }

  currentUrl():string{
    const url:string=window.location.pathname.substr(1,window.location.pathname.length)
    return url
  }
}
