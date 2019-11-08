import { Component, OnInit } from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';


import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import {Router} from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    constructor(
        private authenticationService: AuthenticationService,
        public router: Router,
        public barcodeScanner: BarcodeScanner
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {}
    onScan() {
        const options: BarcodeScannerOptions = {
            preferFrontCamera: true,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: false,
            prompt: 'Place a barcode inside the scans area',
            resultDisplayDuration: 500,
            formats: 'QR_CODE,PDF_417 ',
            orientation: 'landscape',
        };


        this.barcodeScanner.scan(options)
            .then(barcodeData => {
            // success. barcodeData is the data returned by scanner
                console.log(JSON.parse(barcodeData.text));
                this.router.navigate(['/employees-list']);
            }).catch(err => {
            // error
        });
    }
}
