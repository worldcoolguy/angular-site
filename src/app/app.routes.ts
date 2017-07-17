import { Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { WorkComponent } from './work/work.component';
import { IpscComponent } from './ipsc/ipsc.component';
import { RunningComponent} from './running/running.component';
import { ProjectInfoComponent} from './work/project.component';

export const rootRouterConfig: Routes = [
  { path: '', component: HelloComponent}
  /*{ path: 'latest-work', component: WorkComponent},
  ({ path: 'latest-work/:name', component: WorkComponent},
  { path: 'running', component: RunningComponent },
  { path: 'ipsc', component: IpscComponent }*/
];

