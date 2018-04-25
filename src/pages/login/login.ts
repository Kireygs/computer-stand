import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegPage } from '../reg/reg';
import { ProfileProvider } from '../../providers/profile/profile';
import { TabsPage } from '../tabs/tabs';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loginProvider: ProfileProvider,
    private alertCtrl: AlertController) {
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Қайтадан жазыңыз',
      subTitle: 'Логин немесе пароль қате терілді. ',
      buttons: ['Ok']
    });
    alert.present();
  }

  signIn() {
    this.loginProvider.loginByUsernameAndPassword({"where":{"and":[{"login": this.username},{"password": this.password}]}})
      .subscribe(data => {
        if (data[0] && data[0].login == this.username && data[0].password == this.password) {
          localStorage.setItem("login", JSON.stringify(data[0]));
          this.navCtrl.setRoot(TabsPage);
        }else{
          this.presentAlert();
          console.log("ERROR");
        }
      });
  }

  openRegPage() {
    this.navCtrl.push(RegPage);
  }

}
