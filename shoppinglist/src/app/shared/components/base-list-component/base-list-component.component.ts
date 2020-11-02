
import { Component, OnInit } from '@angular/core';
import { BaseModel } from '../../models/base-model.model';
import { BaseService } from '../../services/base-service.service';

@Component({template:''})
export abstract class BaseListComponent<T extends BaseModel> implements OnInit {

    objects:T[]=[]

    constructor(private baseService: BaseService<T>) { }

    ngOnInit() { 
        this.baseService.getAll()
        .subscribe(
            obj=>this.objects=obj.sort((a,b)=>b.id-a.id),
            ()=>alert('Erro ao carregar a lista!')
        )
    }

    deleteObject(object: T) {
        const mustDelete = confirm('Deseja realmente excluir este item?');
        
        if (mustDelete){
          this.baseService.delete(object.id).subscribe(
            () => this.objects = this.objects.filter(element => element != object),
            () => alert("Erro ao tentar excluir!")
          )
        }
      }

    protected abstract tableProprieties():string[]
}