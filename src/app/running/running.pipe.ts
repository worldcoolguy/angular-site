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
