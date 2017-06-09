import {Component, ViewEncapsulation, Injectable, Input, OnInit} from '@angular/core';
import {Project} from "./project";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'project',
  templateUrl: 'project.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./project.scss']
})


export class ProjectComponent{

  constructor(private _sanitizer :DomSanitizer) {}

  private _project: any;

  @Input()
  set project(project: Project) {
    this._project = project;
    this._project.logo = this._sanitizer.bypassSecurityTrustHtml(project.logo);
  }
  get project(): Project { return this._project; }
}

@Component({
  selector: 'project-info',
  templateUrl: 'project-info.html',
  styleUrls: ['./project-info.scss']
})
export class ProjectInfoComponent {

  constructor(private _sanitizer :DomSanitizer) {}

  private _project: any;

  @Input()
  set project(project: Project) {
    this._project = project;
    this._project.totalTime = 0;
    for (let time of project.hours) {
      this._project.totalTime += time;
    }
    if (project.url) {
      this._project.urltitle = project.url.replace(/(^\w+:|^)\/\//, '').replace("/", "");
    }
    this._project.description = this._sanitizer.bypassSecurityTrustHtml(project.description);

  }
  get project(): Project { return this._project; }

}

