import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  flag1 = true;
  flag2 = false;
  flag3 = false;
  flag4 = false;
  num = 1;
  constructor(public navCtrl: NavController) {

  }

  change(i){
    this.num = i;
    this.flag1 = false;
    this.flag2 = false;
    this.flag3 = false;
    this.flag4 = false;
    this['flag' + i] = true;
  }
}
