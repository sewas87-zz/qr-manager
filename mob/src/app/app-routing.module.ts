import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login";
import {HomeComponent} from "./home";
import {AuthGuard} from "./_helpers";
import {RegisterComponent} from "./register";
import {ProfileComponent} from "./profile";
import {EmployeesListComponent} from "./employees-list";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            // loadChildren: '../profile'
            component: ProfileComponent
          }
        ]
      },
      {
        path: 'employees-list',
        children: [
          {
            path: '',
            // loadChildren: '../profile'
            component: EmployeesListComponent
          }
        ]
      },
      {
        path: '',
        component: ProfileComponent,
        pathMatch: 'full'
      },
      { path: '**', redirectTo: '' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
