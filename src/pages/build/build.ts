import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Computer } from '../../providers/computers/computer.model';
import { ComputersProvider } from '../../providers/computers/computers';
import { ComputersPage } from '../computers/computers';
import { BuildDetailPage } from '../build-detail/build-detail';


@IonicPage()
@Component({
  selector: 'page-build',
  templateUrl: 'build.html',
})
export class BuildPage {

  kind: string;
  kinds: Computer[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private computersProvider: ComputersProvider) {
  }


    openPage(kind: string) {
      this.computersProvider.kind = this.kind;
      this.navCtrl.push(ComputersPage, kind);
    }

    openBuild() {
      this.navCtrl.push(BuildDetailPage);
    }


  }




