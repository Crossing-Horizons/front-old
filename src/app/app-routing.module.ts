import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from './utils/authguard/authorization.guard';

import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './components/authentication/login/login.component';

const routes: Routes = [
  {path: '', component: IndexComponent },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
