import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[background]'
})
export class BackgroundDirective implements OnInit{

  //private el: ElementRef;

  @Input() background: string;

  constructor(public el: ElementRef) {}


  ngOnInit() {
    console.log();

    let url = './assets/images/' + this.background;
    this.el.nativeElement.style.backgroundImage = 'url(' + url + ')';
  }
}
