import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserAccount } from '../../../models/user_account';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, public router: Router) { }

  userAccount = new UserAccount();
  submitAttemp = false;
  loginError;

  loginForm = new FormGroup({
    username: new FormControl(this.userAccount.username, [
      Validators.required]),
    password: new FormControl(this.userAccount.password,
    [Validators.required]),
  });

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.router.navigate(['/'])
    }
    
  }

  onSubmit() {
    if(!this.loginForm.invalid){
      // send credential to backend only if the form is valid
      this.authenticationService.login(this.loginForm).then(res =>
        localStorage.setItem('token', res.token)
        ).then(res => this.loginForm.errors == null).then(res=>
          this.router.navigate(['/'])
      ).catch( error => {
        if(error.error.error=='Not found account'){
          this.loginError = 'Not found';
        } else {
          this.loginError = 'Internal';
        }
      });
    } else {
      this.submitAttemp = true;
    }
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
}
