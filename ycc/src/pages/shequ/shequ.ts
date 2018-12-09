import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";//引入服务
/**
 * Generated class for the ShequPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Say{
  sid:number;
  scontent:string;
  stime:string;
  simage:string;
  status:number;
  uid:number;
}


@IonicPage()
@Component({
  selector: 'page-shequ',
  templateUrl: 'shequ.html',
})
export class ShequPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider) {
    this.getList();
  }
  list:Array<Say>=[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShequPage');
  }
  getList(){
    //获取list用于显示
    this.api.getSay().then(data=>{
      console.dir(data);
      this.list=<any>data;
    });

  }
  

}
