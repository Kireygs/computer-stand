import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComputersProvider } from '../../providers/computers/computers';
import { Computer } from '../../providers/computers/computer.model';
import { ComputersDetailPage } from '../computers-detail/computers-detail';



@IonicPage()
@Component({
  selector: 'page-computers',
  templateUrl: 'computers.html',
})
export class ComputersPage implements OnInit {

  kind = this.navParams.data;
  items: Computer[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private compProvider: ComputersProvider) {
  }

  ngOnInit() {
    this.compProvider.getComputersByKind(this.kind)
    .subscribe(data => {
      this.items = data;
    });
  }

  itemSelected(item: Computer){
    this.navCtrl.push(ComputersDetailPage, item);
  }

}
