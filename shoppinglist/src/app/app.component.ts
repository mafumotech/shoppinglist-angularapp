import { BreadCrumb } from './shared/ui/bread-crumb/bread-crumb.model';
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
    this.getBreadTitle()
    this.getPageLinks()
  }


  getBreadTitle():string{

    if(this.currentUrl()=='lists'){
      return 'Listas de Compras'
    }else if(this.currentUrl()=='products'){
      return 'Lista de Produtos'
    }else{
      return 'Dashboard'
    }

  }

  getPageLinks():Array<BreadCrumb>{

    if(this.currentUrl()=='lists'){
      return [{text:'produtos',url:'/products'},{text:'listas'}]
    }else if(this.currentUrl()=='products'){
      return [{text:'listas',url:'/lists'},{text:'produtos'}]
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
