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
    
  constructor(protected injector:Injector,protected listServ:ListService){
    super(injector,listServ)
    this.object=new List()
    this.copyJsonDataToObjectFn=List.copyJsonPropsToList
  }

  protected buildResourceForm(): void {
    this.objectForm=this.formBuilder.group({
        description:[null,[Validators.required,Validators.minLength(3)]],
    })
  }

  goBack(){
      this.router.navigate(['/lists'])
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