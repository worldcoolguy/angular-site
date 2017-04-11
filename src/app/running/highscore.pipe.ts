import {Pipe, PipeTransform } from '@angular/core';
import {Activity} from './activity';

@Pipe({
  name: 'HighscorePipe'
})

export class HighscorePipe implements PipeTransform {
  transform(activities : Activity[]):Activity[] {

    if (activities === undefined) {
      return;
    }
    //let totalDistance: any;
    let matrix: any;
    let months;

    months = [];

    matrix = [];

    //totalDistance = 0;

    activities.forEach(function(item){

      let distance = parseFloat(item.distance);
      //totalDistance = totalDistance + distance;

      let year = item.date.split(' ')[2].trim();
      let month = item.date.split(' ')[0].trim();

      if (!months[year + '-' + month]) {
        matrix[year + '-' + month] = {};
        matrix[year + '-' + month].year = year;
        matrix[year + '-' + month].month = month;
        if (matrix[year + '-' + month].distance == null) {
          console.log('nanana');
          matrix[year + '-' + month].distance = 0.0;
        }
      }

      matrix[year + '-' + month].distance = matrix[year + '-' + month].distance + distance;

    });

    matrix.forEach(function(key, item) {
      console.log(item);
      months.push({
        month : key,
        distance : item,
      });
    });

    //console.log(totalDistance);
    console.log(matrix);


    return activities.filter(activity => {
      return activity.activity == 'Running';
    });
  }
}
