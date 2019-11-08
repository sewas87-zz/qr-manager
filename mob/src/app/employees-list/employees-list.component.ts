import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../_services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {

  constructor(
      private authenticationService: AuthenticationService,
      public router: Router
  ) { }

  ngOnInit() {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
