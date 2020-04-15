import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RequestService } from '../config/request.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private requestService: RequestService) { }

  login(loginForm: FormGroup) {
    return this.requestService.request('POST', `${environment.endpoint}/authentication/login`,
    {
      username: loginForm.value.username,
      password: loginForm.value.password
    }, {}, false);
  }
}