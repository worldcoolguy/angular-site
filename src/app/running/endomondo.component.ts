import { Component          } from '@angular/core';
import { EndomondoService   } from './endomondo.service';
import { Activity           } from './activity';
import { RunningPipe        } from './running.pipe';

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
