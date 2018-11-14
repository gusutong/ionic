import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MysetPage } from '../myset/myset';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController,public http:HttpClient) {
    
  }
  ionViewDidLoad() {
  }
  goSet(){
    this.navCtrl.push(MysetPage);
  }

}
