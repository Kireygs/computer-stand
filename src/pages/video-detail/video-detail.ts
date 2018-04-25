import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@IonicPage()
@Component({
  selector: 'page-video-detail',
  templateUrl: 'video-detail.html',
})
export class VideoDetailPage {

  item = this.navParams.data;
  url: SafeResourceUrl;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sanitizer: DomSanitizer) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.item.video);
  }

  

}
