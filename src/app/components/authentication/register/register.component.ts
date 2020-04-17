import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors  } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import {Router} from '@angular/router';
import { UserAccount } from '../../../models/user_account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, public router: Router) { }

  user_account = new UserAccount();
  submitAttemp = false;
  registerError: string;

  registerForm = new FormGroup({
    username: new FormControl(this.user_account.username, [Validators.required, Validators.minLength(4)]),
    password: new FormControl(this.user_account.password, [Validators.required, Validators.minLength(8)]),
    repeat_password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  }, { validators: this.matchingPasswords });

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null || sessionStorage.getItem('token')!=null){
      this.router.navigate(['/'])
    }
  }

  onSubmit() {
    if(!this.registerForm.invalid){
      // send credential to backend only if the form is valid
      const fd = new FormData();
      fd.append('username', this.registerForm.get('username').value);
      fd.append('password', this.registerForm.get('password').value);
      fd.append('repeat_password', this.registerForm.get('repeat_password').value);
      fd.append('email', this.registerForm.get('email').value);
      fd.append('role', 'user');
      fd.append('active', '1');
      this.authenticationService.register(fd).then(res =>{
          this.router.navigate(['/'])
        }
      ).catch( error => {
        this.registerError = error.error.error;
      });
    } else {
      this.submitAttemp = true;
    }
  }

  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }
  get email() { return this.registerForm.get('email'); }
  get repeat() { return this.registerForm.get('repeat_password'); }

  matchingPasswords(c: AbstractControl): ValidationErrors | null {
    let password = c.get(['password']);
    let confirmPassword = c.get(['repeat_password']);

    if (password.value !== confirmPassword.value) {
      c.get(['repeat_password']).setErrors({mismatch: true})
      return { invalid: true };
    }
    return null;
  }
}
