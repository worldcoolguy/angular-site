import { Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { WorkComponent } from './work/work.component';
import { IpscComponent } from './ipsc/ipsc.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';

export const rootRouterConfig: Routes = [
  { path: '', component: HelloComponent },
  { path: 'latest-work', component: WorkComponent },
  { path: 'ipsc', component: IpscComponent }
];

