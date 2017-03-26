import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'latest-work',
    templateUrl: "work.html",
    styleUrls: ['work.scss']
})
export class WorkComponent {
    constructor (private _location: Location) {}
    goBack() {
        this._location.back();
    }
}
