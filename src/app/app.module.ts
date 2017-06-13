import { NgModule} from '@angular/core'
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

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
import { RunningPipe, HighscorePipe, OfficialPipe, CountPipe, TotalKMPipe } from './running/running.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective,
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
    OfficialPipe,
    CountPipe,
    TotalKMPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    ChartsModule,

  ],
  providers: [
    ProjectService,

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
