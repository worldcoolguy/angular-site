import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'ipsc',
    templateUrl: "ipsc.html",
    styleUrls : [
      'ipsc.scss'
    ]
})
export class IpscComponent {
    constructor (private _location: Location) {
    }
    goBack() {
        this._location.back();
    }
}
