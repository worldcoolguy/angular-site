import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit{

  //private el: ElementRef;

  @Input() appBackground: string;

  constructor(public el: ElementRef) {}


  ngOnInit() {
    console.log();

    let url = './assets/images/' + this.appBackground;
    this.el.nativeElement.style.backgroundImage = 'url(' + url + ')';
  }
}
