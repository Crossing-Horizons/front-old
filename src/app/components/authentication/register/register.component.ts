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
  showModal: boolean = false;

  // Message language control
  public availableLanguages(){
    return ['es', 'en'];
  }

  public activeLang = 'en';

  userLang = this.availableLanguages().includes(navigator.language.split("-")[0]) ? navigator.language.split("-")[0] : this.activeLang;
  
  getMessage(language: string){
    if(language=='es'){
      return `<img src="https://i.imgur.com/VIPB8vU.jpg">`
    } else if(language=='en'){
      return `<img src="https://i.imgur.com/anvUzZp.jpg">`
    }
  }

  // end message language control

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

      // Email message control
      fd.append('message', this.getMessage(this.userLang))

      this.authenticationService.register(fd).then(res =>{
          this.showModal=true;
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
