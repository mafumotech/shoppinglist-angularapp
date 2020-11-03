import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseModel } from '../models/base-model.model';

export abstract class BaseService<T extends BaseModel> {
       
    protected http: HttpClient;
    
    constructor(
        protected apiPath: string, 
        protected injector: Injector, 
        protected copyJsonDataToObjectFn: (jsonData:any)=>T
    ){ this.http=injector.get(HttpClient)}


    getAll():Observable<T[]>{
        return this.http.get(this.apiPath)
        .pipe(

            map(this.jsonArrayToObjectsArray.bind(this)),
            catchError(this.handleError)
        )
    }

    getById(id: number): Observable<T> {
        return this.http.get(`${this.apiPath}/${id}`).pipe(
          map(this.jsonToObject.bind(this)),
          catchError(this.handleError)      
        )
    }

    create(object:T){
        return this.http.post(this.apiPath,object)
        .pipe(
            map(this.jsonToObject.bind(this)),
            catchError(this.handleError)
        )
    }

    update(object:T){
        return this.http.put(`${this.apiPath}/${object.id}`,object)
        .pipe(
            map(this.jsonToObject.bind(this)),
            catchError(this.handleError)
        )
    }

    delete(id:number){
        return this.http.delete(`${this.apiPath}/${id}`)
        .pipe(
            map(()=>null),
            catchError(this.handleError)
        )
    }

    // =======================métodos protegidos

    // pega os dados em array json e transforma em arrar object
    protected jsonArrayToObjectsArray(jsonData:any[]): T[]{
        const objectArr:T[]=[]

        jsonData.forEach(element=>{
            objectArr.push(this.jsonToObject(element))
        })

        return objectArr;
    }

    // pega os dados em json e copia para o object
    protected jsonToObject(jsonData:any):T{
        return this.copyJsonDataToObjectFn(jsonData)
    }

    // debugar erros
    protected handleError(error: any): Observable<any>{
        console.log("ERRO NA REQUISIÇÃO => ", error);
        return throwError(error);
    }

}