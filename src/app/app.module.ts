import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BackgroundDirective } from './background.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
