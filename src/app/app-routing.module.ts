import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphaComponent } from './alpha/alpha.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AlphaComponent,
    canActivate: [AuthGuard]
  },
  // { path: '', component: AlphaComponent },
  {
    path: 'alpha', component: AlphaComponent,
    canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
