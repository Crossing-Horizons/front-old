import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from './utils/authguard/authorization.guard';

import { IndexComponent } from './components/base/index/index.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ConfirmationComponent } from './components/authentication/confirmation/confirmation.component';
import { EntityFormComponent } from './components/entity/entity-form/entity-form.component';

const routes: Routes = [
  {path: '', component: IndexComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'confirmation/:hash', component: ConfirmationComponent},
  {path: 'entity/:type', component: EntityFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
