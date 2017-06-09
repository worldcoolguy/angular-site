import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts';
import { BackgroundDirective} from './background/background.directive';

import { HelloComponent } from './hello/hello.component';
import { WorkComponent } from './work/work.component';
import { ProjectService } from './work/project.service';

import { ProjectComponent, ProjectInfoComponent } from './work/project.component';
import { IpscComponent } from './ipsc/ipsc.component';
import { GalleryComponent } from './ipsc/gallery.component';
import { RunningComponent,
         EndomondoLastActivity,
         RunningHighscores,
         RunningOfficial,
         RunningGraphHistory} from './running/running.component';
import { RunningPipe, HighscorePipe, OfficialPipe } from './running/running.pipe';

import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HelloComponent,
    WorkComponent,
    ProjectComponent,
    ProjectInfoComponent,
    IpscComponent,
    GalleryComponent,
    RunningComponent,
    RunningGraphHistory,
    RunningOfficial,
    RunningHighscores,
    EndomondoLastActivity,
    RunningPipe,
    HighscorePipe,
    OfficialPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    ChartsModule,

  ],
  providers: [
    GithubService
    ProjectService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
