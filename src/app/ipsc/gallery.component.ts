import { Component, Input } from '@angular/core';

@Component({
  selector: 'gallery-component',
  templateUrl: "gallery.component.html",
  styleUrls: [
    "gallery.component.scss"
  ]

})
export class GalleryComponent {
  private _imageurl = '';

  // Override the passed attribute to set general location of gallery images.
  @Input()
  set image(image: string) {
    this._imageurl = './app/ipsc/images/' + image.trim();
  }
  get image(): string { return this._imageurl; }

  constructor () {

  }
}
