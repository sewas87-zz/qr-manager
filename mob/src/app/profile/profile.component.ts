import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';


import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import {Router} from '@angular/router';

@Component({ templateUrl: 'profile.component.html' })
export class ProfileComponent implements OnInit {
  currentUser: User;
  users = [];

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private router: Router,
      public barcodeScanner: BarcodeScanner
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
