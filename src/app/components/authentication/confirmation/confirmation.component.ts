import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  correctConfirm= false;

  constructor(private authenticationService: AuthenticationService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.authenticationService.confirmation(params['hash']).then( res =>{
        this.correctConfirm = true;
      }).catch( error => {
        if(error.error.error = "User already activated"){
          this.router.navigate(['/']);
        }
      });
    });
  }
}
