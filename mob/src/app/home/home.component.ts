import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import {Router} from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];

    scannedData: any;

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


    onScan() {

        this.barcodeScanner.scan().then(barcodeData => {
            // success. barcodeData is the data returned by scanner
            console.log(barcodeData);
        }).catch(err => {
            // error
        });
    }

        // const options: BarcodeScannerOptions = {
        //     preferFrontCamera: true,
        //     showFlipCameraButton: true,
        //     showTorchButton: true,
        //     torchOn: false,
        //     prompt: 'Place a barcode inside the scan area',
        //     resultDisplayDuration: 500,
        //     formats: 'QR_CODE,PDF_417 ',
        //     orientation: 'landscape',
        // };
        //
        // this.barcodeScanner.scan(options).then(barcodeData => {
        //     console.log('Barcode data', barcodeData);
        //     this.scannedData = barcodeData;
        //
        // }).catch(err => {
        //     console.log('Error', err);
        // });

}
