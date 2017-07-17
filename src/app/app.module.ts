import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BackgroundDirective } from './background.directive';
import { IpscComponent } from './ipsc/ipsc.component';
import { WorkComponent } from './work/work.component';
import { GalleryComponent } from './ipsc/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BackgroundDirective,
    IpscComponent,
    WorkComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
