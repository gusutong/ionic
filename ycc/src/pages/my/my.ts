import { Component } from '@angular/core';
import { AccountPage } from '../account/account';
import { AlbumPage } from '../album/album';
import { VideoPage } from '../video/video';
import { FeedbackPage } from '../feedback/feedback';
import { SharePage } from '../share/share';
import { SetupPage } from '../setup/setup';
import { CreationPage } from '../creation/creation';
import { FollowPage } from '../follow/follow';
import { FansPage } from '../fans/fans';
import { HomepagePage } from '../homepage/homepage';
import { EditPage } from '../edit/edit';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
// import { ModalPage } from './ModalPage';
/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  account(){
    this.navCtrl.push(AccountPage);
  }
  album(){
    this.navCtrl.push(AlbumPage);
  }
  video(){
    this.navCtrl.push(VideoPage);
  }
  feedback(){
    this.navCtrl.push(FeedbackPage);
  }
  share(){
    this.navCtrl.push(SharePage);
  }
  setup(){
    this.navCtrl.push(SetupPage);
  }
  creation(){
    this.navCtrl.push(CreationPage);
  }
  follow(){
    this.navCtrl.push(FollowPage);
  }
  fans(){
    this.navCtrl.push(FansPage);
  }
  homepage(){
    this.navCtrl.push(HomepagePage);
  }
  edit(){
    this.navCtrl.push(EditPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

}
