import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
/** Restricts access to routes to all users not logged */
export class AuthorizationGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate() {
    if (!this.authenticationService.userRole()) {
        this.router.navigate(['/login']);
        return false;
    }
    return true;
  }
}

/** Restricts access to routes to all users logged in.
 *  Only for login and register forms. 
 */
export class UnauthenticatedGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate() {
    if (this.authenticationService.userRole()) {
        this.router.navigate(['/']);
        return false;
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
/** Restricts access to routes to all users other than the administrator */
export class AdminGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate() {
    if (this.authenticationService.userRole()!='admin') {
        this.router.navigate(['/']);
        return false;
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
/** Restricts access to routes to all users other than the seller */
export class SellerGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate() {
    if (this.authenticationService.userRole()!='seller') {
        this.router.navigate(['/']);
        return false;
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
/** Restricts access to routes to all users other than the writer */
export class WriterGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate() {
    if (this.authenticationService.userRole()!='writer') {
        this.router.navigate(['/']);
        return false;
    }
    return true;
  }
}