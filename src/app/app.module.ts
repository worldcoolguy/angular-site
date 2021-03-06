import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BackgroundDirective } from './background.directive';
import { IpscComponent } from './ipsc/ipsc.component';
import { WorkComponent } from './work/work.component';
import { ProjectInfoComponent, ProjectComponent } from './work/project.component';
import { ProjectService } from './work/project.service';
import { GalleryComponent } from './ipsc/gallery.component';
import { RunningComponent,
  EndomondoLastActivity,
  RunningHighscores,
  RunningOfficial
  } from './running/running.component';
import { RunningService } from './running/running.service';
import { RunningPipe, HighscorePipe, OfficialPipe, CountPipe, TotalKMPipe } from './running/running.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BackgroundDirective,
    IpscComponent,
    WorkComponent,
    ProjectInfoComponent,
    ProjectComponent,
    GalleryComponent,
    RunningComponent,
    EndomondoLastActivity,
    RunningHighscores,
    RunningOfficial,
    RunningPipe,
    HighscorePipe,
    OfficialPipe,
    CountPipe,
    TotalKMPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),

  ],
  providers: [
    ProjectService,
    RunningService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
