import {Pipe, PipeTransform } from '@angular/core';
import {Activity} from './activity';

@Pipe({
  name: 'RunningPipe'
})
export class RunningPipe implements PipeTransform {
  transform(activities : Activity[]):Activity[] {

    if (activities === undefined) {
      return;
    }
    return activities.filter(activity => {
      return activity.activity == 'Running';
    });
  }
}

@Pipe({
  name: 'CountPipe'
})
export class CountPipe implements PipeTransform {
  transform(activities : Activity[]) {

    if (activities === undefined) {
      return;
    }
    return activities.length;
  }
}

@Pipe({
  name: 'TotalKMPipe'
})
export class TotalKMPipe implements PipeTransform {
  transform(activities : Activity[]) {

    if (activities === undefined) {
      return;
    }

    let totalKM: number = 0;
    activities.forEach(function(activity){
      totalKM += parseFloat(activity.distance);
    });
    return Math.round(totalKM);
  }
}

@Pipe({
  name: 'OfficialPipe'
})
export class OfficialPipe implements PipeTransform {

  transform(activities : Activity[]):Activity[] {

    if (activities === undefined) {
      return;
    }

    activities.sort((a: any, b: any) => {
      if(parseFloat(a.distance) < parseFloat(b.distance)) {
        return -1;
      } else if (parseFloat(a.distance) > parseFloat(b.distance)) {
        return 1;
      } else {
        return 0;
      }
    });

    return activities.filter(activity => {
      return activity.official != null;
    });
  }
}

@Pipe({
  name: 'HighscorePipe'
})
export class HighscorePipe implements PipeTransform {

  transform(activities : Activity[]):Activity[] {

    if (activities === undefined) {
      return;
    }

    activities.sort((a: any, b: any) => {
      if(parseFloat(a.distance) < parseFloat(b.distance)) {
        return -1;
      } else if (parseFloat(a.distance) > parseFloat(b.distance)) {
        return 1;
      } else {
        return 0;
      }
    });

    return activities.filter(activity => {
      return activity.highscore != null;
    });
  }
}
