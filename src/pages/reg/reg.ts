import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-reg',
  templateUrl: 'reg.html',
})
export class RegPage {

  login = '';
  password = '';
  repassword = '';
  fio = '';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private profileProvider: ProfileProvider,
    private alertCtrl: AlertController) {
  }

  reg() {
    if (this.login == '' || this.password == '' || this.fio == '') {
      this.presentAlert('Қате!', 'Барлық өрістер толтырылуы керек');
    }else if (this.password != this.repassword) {
      this.presentAlert('Ошибка!', 'Пароли не совпадают.');
    }else{
      let toSave = {
        login: this.login,
        password: this.password,
        name: this.fio
      };
      this.profileProvider.add(toSave).subscribe(
        success => {
          this.presentAlert('Cәтті!', 'Сіз тіркелдіңіз!');
          this.navCtrl.setRoot(LoginPage);
        },
        error => this.presentAlert('Қате!', 'Серверде қате. Кейінірек қайталаңыз.')
      );
    }
  }

  presentAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['Ок']
    });
    alert.present();
  }

  
}
