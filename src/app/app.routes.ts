import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';

export const rootRouterConfig: Routes = [
  { path: '', component: HelloComponent },
];

