import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RequestService } from '../config/request.service';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private requestService: RequestService) { }

  create(data: any) {
    return this.requestService.request('POST', `${environment.endpoint}/entity`, data, {}, false);
  }

  get(name: string, type: string){
    return this.requestService.request('GET', `${environment.endpoint}/entity/get`, {name, type}, {}, false);
  }
}
