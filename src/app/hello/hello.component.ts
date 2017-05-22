import { Component, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: "hello.html",
  styleUrls: [
    'hello.scss',
    'hello.background.scss',
    'hello.breakpoints.scss'
  ],

})
export class HelloComponent {
  constructor() {

  }
}


@Directive({
  selector: '[hello-background]',
})
export class HelloBackgroundDirective {
  constructor(el: ElementRef) {
    let url = 'assets/images/img-0003.jpg';
    el.nativeElement.style.backgroundImage = 'url(' + url + ')';
  }
}
