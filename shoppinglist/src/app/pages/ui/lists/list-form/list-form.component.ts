import { Component, Injector } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared/components/base-form-component/base-form-component.component';
import { List } from '../shared/models/list.model';
import { Validators } from '@angular/forms';
import { Button } from 'src/app/shared/components/button/models/button.model';
import { ListService } from '../shared/services/list.service';

@Component({
    selector: 'ng-list',
    templateUrl: 'list-form.component.html'
})

export class ListFormComponent extends BaseFormComponent<List> {
  list: List;
    
  constructor(protected injector:Injector,protected listServ:ListService){
    super(injector,listServ)
    this.object=new List()
    this.copyJsonDataToObjectFn=List.copyJsonPropsToList
  }

  protected buildResourceForm(): void {
    this.objectForm=this.formBuilder.group({
        description:[null,[Validators.required,Validators.minLength(3)]],
        balance:[null],
        date:[null],
        items:[null],
        status:[null],
        itemQtd:[null],
        id:[null],
    })
  }

  goBack(){
      this.router.navigate(['/lists'])
  }

  submitForm(){
    if(this.route.snapshot.url[0].path=='edit'){
      this.listServ.updateList(Object.assign(this.objectForm.value))
      this.isLoading=false
    }else{

      this.listServ.addList(this.objectForm.value)
      this.objectForm.reset()
      this.isLoading=false
    }
    
  }

  loadObject(){
   if(this.route.snapshot.url[0].path=='edit'){
    let list = this.listServ.getProdById(this.route.snapshot.params['id'])
    if(list){
      this.objectForm.patchValue(list)
        this.list=list
    }
        
   }
  }

  handleButton(type?:string):Button{

      if(type==='save'){

          return {
            type:'submit',
            name:'save list',
            icon:'fas fa-save',
            color:'btn-outline-primary',
            size:'btn-md',
            isLoading:this.isLoading,
            isDisabled:(this.objectForm.invalid || this.isLoading)
          } as Button

    }else{

        return {
            type:'button',
            name:'voltar',
            icon:'fas fa-arrow-left',
            color:'btn-outline-secondary',
            size:'btn-sm'
        } as Button
      
    }

  }
}