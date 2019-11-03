import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login";
import {HomeComponent} from "./home";
import {AuthGuard} from "./_helpers";
import {RegisterComponent} from "./register";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
