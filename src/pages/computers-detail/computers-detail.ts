import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-computers-detail',
  templateUrl: 'computers-detail.html',
})
export class ComputersDetailPage {

  item = this.navParams.data;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
