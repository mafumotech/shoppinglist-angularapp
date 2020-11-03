import { AfterContentChecked,  OnInit, Injector, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BaseModel } from '../../models/base-model.model';
import { BaseService } from '../../services/base-service.service';

@Component({template:''})
export abstract class BaseFormComponent<T extends BaseModel> implements OnInit,AfterContentChecked {


    protected route: ActivatedRoute;
    protected router: Router;
    protected formBuilder: FormBuilder;
    public object:T

    objectForm:FormGroup
    isLoading:boolean
    currentAction: string;
    pageTitle:string
    serverErrorMessages: string[] = null;

    protected copyJsonDataToObjectFn : (jsonData:any)=>T
    
    constructor(
      protected injector:Injector,
      protected baseService:BaseService<T>,
      ) { 
        this.route=this.injector.get(ActivatedRoute);
        this.router=this.injector.get(Router);
        this.formBuilder=this.injector.get(FormBuilder);
        this.isLoading=false
      }

    
    ngOnInit():void {
        // this.setCurrentAction();

        this.buildResourceForm();
        this.loadObject();
    }
       
    ngAfterContentChecked(): void {
        this.setPageTitle
    }

    protected setPageTitle() {
        if (this.currentAction == 'new')
          this.pageTitle = this.creationPageTitle();
        else{
          this.pageTitle = this.editionPageTitle();
        }
      }
    
    protected creationPageTitle(): string{
    return "Novo"
    }

    protected editionPageTitle(): string{
    return "Edição"
    }

    submitForm(){
        this.isLoading = true;
    
        if(this.currentAction == "new")
          this.createObject();
        else // currentAction == "edit"
          this.updateObject();
    }

    updateObject() {
      const resource: T = this.copyJsonDataToObjectFn(this.objectForm.value);

      this.baseService.update(resource)
        .subscribe(
          resource => this.actionsForSuccess(resource),
          error => this.actionsForError(error)
        )
    }

    createObject() {
        const object:T=this.copyJsonDataToObjectFn(this.objectForm.value)

        this.baseService.create(object)
        .subscribe(
            object => this.actionsForSuccess(object),
            error => this.actionsForError(error)
        )
    }

    protected actionsForError(error: any): void {
        // toastr.error("Ocorreu um erro ao processar a sua solicitação!");
        alert("Ocorreu um erro ao processar a sua solicitação!")

        this.isLoading = false;

        if(error.status === 422)
        this.serverErrorMessages = JSON.parse(error._body).errors;
        else
        this.serverErrorMessages = ["Falha na comunicação com o servidor. Por favor, tente mais tarde."]
    }

    protected actionsForSuccess(object: any): void {
        //    toastr.success("Solicitação processada com sucesso!");
        alert("Solicitação processada com sucesso!");

        this.isLoading = false;

        const baseComponentPath: string = this.route.snapshot.parent.url[0].path;

        // redirect/reload component page
        this.router.navigateByUrl(baseComponentPath, {skipLocationChange: true}).then(
      () => this.router.navigate([baseComponentPath, object.id, "edit"])
    )
    }

    loadObject() {
        // if (this.currentAction == "edit") {
      
        //     this.route.paramMap.pipe(
        //       switchMap(params => this.baseService.getById(+params.get("id")))
        //     )
        //     .subscribe(
        //       (object) => {
        //         this.object = object;
        //         this.objectForm.patchValue(object) // binds loaded resource data to resourceForm
        //       },
        //       () => alert('Ocorreu um erro no servidor, tente mais tarde.')
        //     )
        //   }
    }


     // PRIVATE METHODS

  // protected setCurrentAction() {
  //   if(this.route.snapshot.url[0].path == "new")
  //     this.currentAction = "new"
  //   else
  //     this.currentAction = "edit"
  // }
 
  protected abstract buildResourceForm():void

}