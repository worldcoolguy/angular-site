import { Component, Injectable } from '@angular/core';
import {Location} from '@angular/common';
import { EndomondoService } from './endomondo.service';
import { Activity } from './activity';

@Component({
    selector: 'running',
    templateUrl: "running.html",
    styleUrls: [
      'running.scss',
      'breakpoints.scss'
    ],
})

export class RunningComponent {
    constructor (private _location: Location) {
    }

    goBack() {
        this._location.back();
    }
}

@Component({
    selector: 'running-official',
    providers: [EndomondoService],
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
    private activities:Activity[];

    constructor(private _endomondoService:EndomondoService) {
        this._endomondoService.getActivities().subscribe(activities => {this.activities = activities});
    }
}


@Component({
    selector: 'running-highscore',
    providers: [EndomondoService],
    template: `
    <table>
    <tr *ngFor="let activity of (activities | RunningPipe | HighscorePipe )">
     <td>{{ activity.date }}</td>
     <td>{{ activity.distance }}</td>
     <td>{{ activity.time }}</td>
    </tr>
    </table>`
})
export class RunningHighscores {
    private activities:Activity[];

    constructor(private _endomondoService:EndomondoService) {
        this._endomondoService.getActivities().subscribe(activities => {this.activities = activities});
    }
}


@Component({
    selector: 'running-last-activity',
    providers: [EndomondoService],
    template: `<table>
      <tr *ngFor="let activity of (activities | RunningPipe )| slice:0:3;">
        <td>{{ activity.date }}</td>
        <td>{{ activity.distance }}</td>
        <td>{{ activity.time }}</td>
      </tr>
    </table>`
})
export class EndomondoLastActivity {
    private activities:Activity[];

    constructor(private _endomondoService:EndomondoService) {
        this._endomondoService.getActivities().subscribe(activities => {this.activities = activities});
    }
}

@Component({
    selector: 'running-graph',
    providers: [EndomondoService],
    styleUrls: ['running.scss'],
    template: `
    
      <div class="chart-container">
        <canvas baseChart
                [datasets]="barChartData"
                [labels]="barChartLabels"
                [options]="barChartOptions"
                [legend]="barChartLegend"
                [chartType]="barChartType"
                (chartHover)="chartHovered($event)"
                (chartClick)="chartClicked($event)"></canvas>
      </div>
    `
})
export class RunningGraphHistory {

    //ViewChild(BaseChartDirective) private _chart;

    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = [];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = false;

    public barChartData:any[] = [
        {data: []},

    ];
    private activities:Activity[];

    constructor(private _endomondoService:EndomondoService) {
        let start: number = 2013;

        let monthNames: Array<string> = ['', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

        let matrix = [];

        for (let year = 2017; year >= start; year--) {
            for (let month:number = 12; month > 0; month--) {
                let obj = {
                    'name': monthNames[month] + ' ' + year,
                    'key': year + '-' + month,
                    'distance': 0,
                };
                matrix.push(obj);
            }
        }

        let labels = [];

        matrix.forEach(function(item){
            labels.push(item.name);
        });

        this.barChartLabels = labels;


        this._endomondoService.getActivities().subscribe(activities => {
            this.activities = activities;

            this.activities.forEach(function(item){
                if (item.activity != 'Running') {
                    return;
                }
                let distance = parseFloat(item.distance);

                let year = item.date.split(' ')[2].trim();
                let month = item.date.split(' ')[0].trim().toLowerCase();
                let key = year + '-' + (monthNames.indexOf(month));

                matrix.forEach(function(item) {
                    if (key == item.key) {
                        item.distance = item.distance + distance;
                    }
                });

            });

            let distances = [];

            matrix.forEach(function(item, i){
                if (item.distance == 0) {
               //     delete matrix[i];
                 //   delete labels[i];

                }
            });
           // this._chart.refresh();

            matrix.forEach(function(item, i){
                distances.push(parseInt(item.distance))
            });


            setTimeout(() => {
                this.barChartData = [{ data: distances }];
            });
        });
    }
}
