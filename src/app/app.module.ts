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

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BackgroundDirective,
    IpscComponent,
    WorkComponent,
    ProjectInfoComponent,
    ProjectComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),

  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
