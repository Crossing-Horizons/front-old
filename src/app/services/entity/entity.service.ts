import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RequestService } from '../config/request.service';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private requestService: RequestService) { }

  create(data: any) {
    return this.requestService.request('POST', `${environment.endpoint}/entity/create`, data, {}, false);
  }

  getByName(name: string, type: string){
    return this.requestService.request('GET', `${environment.endpoint}/entity/getByName`, {name, type}, {}, false);
  }

  getByEntityId(id: number, type: string, entityOrTypeId: string){
    return this.requestService.request('GET', `${environment.endpoint}/entity/getByEntityId`, {id, type, entityOrTypeId}, {}, false);
  }

  getHybridParents(id: number){
    return this.requestService.request('GET', `${environment.endpoint}/entity/getHybridParents`, {id}, {}, false);
  }

  getRecipeAndMaterials(name: string){
    return this.requestService.request('GET', `${environment.endpoint}/entity/getRecipeAndMaterials`, {name}, {}, false);
  }
}
