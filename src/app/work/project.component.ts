import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Project} from "./project";


@Component({
  selector: 'project',
  templateUrl: 'project.html'
})


export class ProjectComponent{

  private _project: any;

  @Input()
  set project(project: Project) {
    this._project = project;
    this._project.hoursCombined = '10 timer';
  }
  get project(): Project { return this._project; }
}

@Component({
  selector: 'project-info',
  templateUrl: 'project-info.html'
})


export class ProjectInfoComponent {

  private _project: any;

  @Input()
  set project(project: Project) {
    this._project = project;
    this._project.hoursCombined = '10 timer';

  }
  get project(): Project { return this._project; }

}

