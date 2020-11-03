import { List } from './../shared/models/list.model';
import { ListService } from './../shared/services/list.service';
import { Component, Injector, OnInit } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared/components/base-form-component/base-form-component.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Button } from 'src/app/shared/components/button/models/button.model';

@Component({
    selector: 'ng-item-form',
    templateUrl: 'item-form.component.html'
})

export class ItemFormComponent extends BaseFormComponent<List>{

    objectForm:FormGroup
    
    units:Array<string>=[
        'Nunhum','cada','peça(s)','saco(s)','garafa(s)','caixa(s)',
        'estojo(a)','jar(as)','can','bunch','rolo(s)','dúzia(s)','pequeno(s)',
        'grande(s)','g','kg','l','dl','ml','lbs','qt','oz','cup','tbsp','tsp',
        'galão','pts','cacho'
    ]
    constructor(public  listServ:ListService,protected injector:Injector) {
        super(injector,listServ)
    }

    protected buildResourceForm(): void {
        this.objectForm=this.formBuilder.group({
            name:[null,[Validators.required]],
            qtd:[null,[Validators.required]],
            price:[null,[Validators.required]],
            unit:[null,[Validators.required]]
        })
    }

    handleButton(type?:string):Button{

            return {
              type:'submit',
              name:'save item',
              icon:'fas fa-save',
              color:'btn-outline-primary',
              size:'btn-md',
              isDisabled:(this.objectForm.invalid)
            } as Button
 
    }
}