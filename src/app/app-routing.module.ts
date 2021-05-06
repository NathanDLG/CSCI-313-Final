import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  //add the home component/page here like this below
  //{path: '', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  //otherwise redirect back to whatever the home page is
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
