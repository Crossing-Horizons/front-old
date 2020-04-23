import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RequestService } from '../config/request.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

    constructor(private requestService: RequestService) { }

    uploadFile(data: any) {
        return this.requestService.request('POST', `${environment.endpoint}/upload`, data, {}, false);
      }
}
