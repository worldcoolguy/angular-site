import { Component, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: "hello.html",
  styleUrls: [
    'hello.scss',
    'hello.background.scss'
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
    let url = './app/assets/img-0022.jpg';
    el.nativeElement.style.backgroundImage = 'url(' + url + ')';
  }
}
