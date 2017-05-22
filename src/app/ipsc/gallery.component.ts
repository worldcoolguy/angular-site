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
    this._imageurl = 'assets/images/' + image.trim();
  }
  get image(): string { return this._imageurl; }

  @Input()
  set video(video: string) {
    this._videourl = 'assets/' + video.trim();
  }
  get video(): string { return this._videourl;}

  @Input() setVisibleBack: boolean;
  @Input() flip: boolean;
  @Input() initflip: number;


  assetLoaded() {
    // Flip image visible on load complete.
    this.setActiveClass = true;
  }


  constructor () {

  }

  static flipGalleryItem(itemId: string) {
    //let el = document.getElementById(itemId);
    console.log('hest');
  }

  ngAfterViewInit() {

    if (this._videourl) {
      this.setActiveClass = true;
    }



    //setTimeout(() => this.setActiveClass = true, this.initflip);

    /*if (this.flip) {
      setTimeout(() => {
        this.setActiveClass = false;
        this.setVisibleBack = true;
      }, this.flip);
    }*/
  }
}
