import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

declare let ga:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app.scss'
  ]
})
export class AppComponent {

  public location: string;

  constructor(public router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        // Get the first part of url.
        let parts = router.url.split('/');
        this.location = parts[1];


        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
