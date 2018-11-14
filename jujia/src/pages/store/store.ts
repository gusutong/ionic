import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  arr = ['客厅','卧室','餐厅','书房','门厅'];
  flag = 0;
  num = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  change(i){
    this.flag = i;
    this.num = i;
  }

}
