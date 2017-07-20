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
  currentRoute: string = '';
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
