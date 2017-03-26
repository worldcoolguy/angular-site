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
