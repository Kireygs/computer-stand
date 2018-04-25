import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoDetailPage } from '../video-detail/video-detail';


@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  items = [
    {title: "Дербес компьютер жинау 1", desc: "компьютерді жинау туралы ақпарат", url: "https://img.youtube.com/vi/W6gtuas4pQI/0.jpg", video: "W6gtuas4pQI" },
    {title: "Дербес компьютер жинау 2", desc: "компьютерді жинау туралы ақпарат", url: "https://img.youtube.com/vi/RgZrnAL2T6s/1.jpg", video: "RgZrnAL2T6s" },
    {title: "Жүйелік блок жинау", desc: "Блоктың қалай дұрыс жинау жайлы ", url: "https://img.youtube.com/vi/ZQ2nnHvrv7k/2.jpg", video: "ZQ2nnHvrv7k" },
    {title: "Жүйелік блоктың ішінде не бар?", desc: "Жүйелік блок дегеніміз не және оның іші кандай", url: "https://img.youtube.com/vi/BFvLUJli7NI/3.jpg", video: "BFvLUJli7NI" },
    {title: "Компьютерде ядро дегеніміз не?", desc: "Ядро туралы толық ақпарат", url: "https://img.youtube.com/vi/Vl1ZpvbDHKE/0.jpg", video:"Vl1ZpvbDHKE" },
    {title: "Компьютерде видеокарта дегеніміз не?", desc: "Видеокарта жайлы ақпарат", url: "https://img.youtube.com/vi/mS685vi-oZk/0.jpg", video:"mS685vi-oZk" },
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemSelected(item) {
    this.navCtrl.push(VideoDetailPage, item);
  }




}
