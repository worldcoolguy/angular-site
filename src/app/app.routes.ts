import { Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { IpscComponent } from './ipsc/ipsc.component';
import { WorkComponent } from './work/work.component';
import { RunningComponent} from './running/running.component';

export const rootRouterConfig: Routes = [
  { path: '', component: HelloComponent},
  { path: 'ipsc', component: IpscComponent },
  { path: 'latest-work', component: WorkComponent},
  { path: 'latest-work/:name', component: WorkComponent},
  { path: 'running', component: RunningComponent }
];

