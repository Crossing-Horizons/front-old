import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard, UnauthenticatedGuard, AdminGuard, WriterGuard, SellerGuard } from './utils/authguard/authorization.guard';

import { IndexComponent } from './components/base/index/index.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ConfirmationComponent } from './components/authentication/confirmation/confirmation.component';
import { EntityFormComponent } from './components/entity/entity-form/entity-form.component';
import { EntityDisplayComponent } from './components/entity/entity-display/entity-display.component';

const routes: Routes = [
  {path: '', component: IndexComponent },
  {path: 'login', canActivate:[UnauthenticatedGuard], component: LoginComponent},
  {path: 'register', canActivate:[UnauthenticatedGuard], component: RegisterComponent},
  {path: 'confirmation/:hash', canActivate:[UnauthenticatedGuard], component: ConfirmationComponent},
  {path: 'entity/new/:type', component: EntityFormComponent, data:{creating: true}},
  {path: 'entity/edit/:type', component: EntityFormComponent, data:{creating: false}},
  {path: 'entity/:type/:name', component: EntityDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
