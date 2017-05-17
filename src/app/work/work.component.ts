import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Project } from './project';

@Component({
    selector: 'latest-work',
    templateUrl: "work.html",
    styleUrls: ['work.scss']
})
export class WorkComponent {

    projects: Project[] = [
        {name : "Projekt 1", dateFrom: "maj", dateTo: "August", hours:[10,10], technologies: ["hest"], description: "hest"},
        {name : "Projekt 2", dateFrom: "maj", dateTo: "August", hours:[10,10], technologies: ["hest"], description: "hest"},
        {name : "Projekt 3", dateFrom: "maj", dateTo: "August", hours:[10,10], technologies: ["hest"], description: "hest"},
        {name : "Projekt 4", dateFrom: "maj", dateTo: "August", hours:[10,10], technologies: ["hest"], description: "hest"},
        {name : "Projekt 5", dateFrom: "maj", dateTo: "August", hours:[10,10], technologies: ["hest"], description: "hest"},
        {name : "Projekt 6", dateFrom: "maj", dateTo: "August", hours:[10,10], technologies: ["hest"], description: "hest"}
    ];


    constructor (private _location: Location) {}
    goBack() {
        this._location.back();
    }
}
