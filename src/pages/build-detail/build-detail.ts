import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuildProvider } from '../../providers/build/build';
import { Build } from '../../providers/build/build.model';




@IonicPage()
@Component({
  selector: 'page-build-detail',
  templateUrl: 'build-detail.html',
})
export class BuildDetailPage implements OnInit {

  build: Build;

  proc: any;
  cooler: any;
  ozu: any;
  matplata: any;
  video: any;
  hdd: any;
  blog: any;
  system: any;
  corpus: any;

  buildCompt: Build = {
    processor: "",
    cooling: "",
    ram: "",
    motherboard: "",
    videocard: "",
    hard: "",
    power: "",
    os: "",
    case: "",
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private buildProvider: BuildProvider) {
    this.buildProvider.getComputers().subscribe(data =>{
        this.build = data;
        console.log(data);
      });
  }

  ngOnInit() {
    this.buildProvider.getItemsByCategory("процессор").subscribe(data=> {
      this.proc = data;
    });
    this.buildProvider.getItemsByCategory("салқындатқыш").subscribe(data=> {
      this.cooler = data;
    });
    this.buildProvider.getItemsByCategory("салқындатқыш").subscribe(data=> {
      this.cooler = data;
    });
  }

}
