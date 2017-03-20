import {Component, Input, AfterViewInit} from '@angular/core';

@Component({
  selector: 'gallery-component',
  templateUrl: "gallery.component.html",
  styleUrls: [
    "gallery.component.scss"
  ]

})
export class GalleryComponent implements AfterViewInit{
  public setActiveClass: boolean;
  private _imageurl: string;
  private _videourl: string;

  // Override the passed attribute to set general location of gallery images.
  @Input()
  set image(image: string) {
    this._imageurl = './app/ipsc/images/' + image.trim();
  }
  get image(): string { return this._imageurl; }

  @Input()
  set video(video: string) {
    this._videourl = './app/ipsc/' + video.trim();
  }
  get video(): string { return this._videourl;}

  @Input() setVisibleBack: boolean;
  @Input() showBack: boolean;



  constructor () {

  }


  ngAfterViewInit() {
    setTimeout(() => this.setActiveClass = true, (Math.floor(Math.random() * 3000) + 500));

    if (this.showBack) {
      setTimeout(() => {
        this.setActiveClass = false;
        this.setVisibleBack = true;
      }, this.showBack);
    }
  }
}
