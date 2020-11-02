import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service.service';
import { List } from '../models/list.model';

@Injectable({providedIn: 'root'})
export class ListService extends BaseService<List> {

    constructor(protected injector:Injector) {
        super('',injector,List.copyJsonPropsToList)
     }
    
}