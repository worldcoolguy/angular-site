import { Component, Injectable } from '@angular/core';
import {Location} from '@angular/common';
import { RunningService } from './running.service';
import { Activity } from './activity';

@Component({
  selector: 'running',
  templateUrl: "running.component.html",
  providers: [RunningService],
  styleUrls: [
    './running.breakpoints.scss',
    './running.component.scss'
  ],
})

export class RunningComponent {

  public activities:Activity[];

  constructor(private _endomondoService:RunningService, private _location: Location) {
    this._endomondoService.getActivities().subscribe(activities => {this.activities = activities});
  }

  goBack() {
    this._location.back();
  }
}

@Component({
  selector: 'running-official',
  providers: [RunningService],
  styleUrls: ['running.component.scss'],
  template: `
    <table>
      <tr *ngFor="let activity of (activities | RunningPipe | OfficialPipe )">
        <td>{{ activity.date }}</td>
        <td>{{ activity.official }}</td>
        <td>{{ activity.distance }}</td>
        <td>{{ activity.time }}</td>
      </tr>
    </table>`
})
export class RunningOfficial {
  public activities:Activity[];

  constructor(private _endomondoService:RunningService) {
    this._endomondoService.getActivities().subscribe(activities => {this.activities = activities});
  }
}


@Component({
  selector: 'running-highscore',
  providers: [RunningService],
  styleUrls: ['running.component.scss'],
  template: `
    <table>
      <tr *ngFor="let activity of (activities | RunningPipe | HighscorePipe )">
        <td>{{ activity.date }}</td>
        <td>Løb</td>
        <td>{{ activity.distance }}</td>
        <td>{{ activity.time }}</td>
      </tr>
    </table>`
})
export class RunningHighscores {
  public activities:Activity[];

  constructor(private _endomondoService:RunningService) {
    this._endomondoService.getActivities().subscribe(activities => {this.activities = activities});
  }
}


@Component({
  selector: 'running-last-activity',
  providers: [RunningService],
  styleUrls: ['running.component.scss'],
  template: `<table>
    <tr *ngFor="let activity of (activities | RunningPipe )| slice:0:3;">
      <td>{{ activity.date }}</td>
      <td>Løb</td>
      <td>{{ activity.distance }}</td>
      <td>{{ activity.time }}</td>
    </tr>
  </table>`
})
export class EndomondoLastActivity {
  public activities:Activity[];

  constructor(private _endomondoService:RunningService) {
    this._endomondoService.getActivities().subscribe(activities => {this.activities = activities});
  }
}
