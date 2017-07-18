import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Project } from "./project";
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "./project.service";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: [
    './work.component.scss',
    './work.background.scss',
    './work.breakpoints.scss'
  ]
})
export class WorkComponent implements OnInit {
  public selectedproject: any;
  private sub: any;
  public projects:Project;

  constructor (private _location: Location, private route: ActivatedRoute, private _projectService:ProjectService) {
    this._projectService.getProjects().subscribe(projects => {this.projects = projects});

  }

  ngOnInit() {
    // https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
    this.sub = this.route.params.subscribe(params => {
      let key = params['name'];
      this.selectedproject = key;
    });
  }
}





/*import { Project } from './project';
import { ProjectInfoComponent } from './project.component';
import {ActivatedRoute} from "@angular/router";
import { ProjectService} from "./project.service";*/


/*@Component({
  selector: 'latest-work',
  templateUrl: "work.html",
  styleUrls: ['work.scss', ]
})*/
