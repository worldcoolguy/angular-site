import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HelloComponent, HelloBackgroundDirective } from './hello/hello.component';
import { WorkComponent } from './work/work.component';
import { IpscComponent } from './ipsc/ipsc.component';
import { GalleryComponent } from './ipsc/gallery.component';
import { RunningComponent, EndomondoComponent} from './running/running.component';
import { RunningPipe } from './running/running.pipe';


import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HelloComponent,
    HelloBackgroundDirective,
    WorkComponent,
    IpscComponent,
    GalleryComponent,
    RunningComponent,
    EndomondoComponent,
    RunningPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [
    GithubService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
