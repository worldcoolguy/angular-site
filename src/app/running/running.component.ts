import { Component, Injectable } from '@angular/core';
import {Location} from '@angular/common';
import { EndomondoService } from './endomondo.service';
import { Activity } from './activity';

@Component({
    selector: 'running',
    templateUrl: "./running.html",
})

export class RunningComponent {
    constructor (private _location: Location) {
    }

    goBack() {
        this._location.back();
    }
}

@Component({
    selector: 'activities-list',
    providers: [EndomondoService],
    template: `<h2>aktiviteter fra Endomondo</h2>
    <table>
    <tr *ngFor="let activity of (activities | RunningPipe)">
     <td>{{ activity.date }}</td>
     <td>{{ activity.activity }}</td>
     <td>{{ activity.distance }}</td>
     <td>{{ activity.time }}</td>
    </tr>
    </table>`
})
export class EndomondoComponent {
    private activities:Activity[];

    constructor(private _endomondoService:EndomondoService) {
        this._endomondoService.getActivities().subscribe(activities => {this.activities = activities});
    }
}

@Component({
    selector: 'running-highscore',
    providers: [EndomondoService],
    template: `<h2>Rekorder</h2>
    <div>
      <div style="width:30%;height:20%;">
        <canvas baseChart
                [datasets]="barChartData"
                [labels]="barChartLabels"
                [options]="barChartOptions"
                [legend]="barChartLegend"
                [chartType]="barChartType"
                (chartHover)="chartHovered($event)"
                (chartClick)="chartClicked($event)"></canvas>
      </div>
      <button (click)="randomize()">Update</button>
    </div>`
})
export class RunningHighScore {
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = false;

    public barChartData:any[] = [
        {data: [65, 59, 80, 81, 56, 55, 40]},

    ];
    private activities:Activity[];

    constructor(private _endomondoService:EndomondoService) {

        let matrix: Array<string>;
        let months;

        months = [];

        matrix = [];


        this._endomondoService.getActivities().subscribe(activities => {
            this.activities = activities;

            this.activities.forEach(function(item){

                let distance = parseFloat(item.distance);
                //totalDistance = totalDistance + distance;

                let year = item.date.split(' ')[2].trim();
                let month = item.date.split(' ')[0].trim();

                /*if (!months[year + '-' + month]) {
                    matrix[year + '-' + month] = {};
                    matrix[year + '-' + month].year = year;
                    matrix[year + '-' + month].month = month;
                    if (matrix[year + '-' + month].distance == null) {
                        console.log('nanana');
                        matrix[year + '-' + month].distance = 0.0;
                    }
                }

                matrix[year + '-' + month].distance = matrix[year + '-' + month].distance + distance;*/
            });

            matrix.forEach(function(item2){
                console.log('hest');
            });
        });


    this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];
    this.barChartData = [
            {data: [65, 59, 80, 81, 56, 55, 40, 70, 70, 70, 70, 70, 70, 70, 70]},

        ];

    }
}
