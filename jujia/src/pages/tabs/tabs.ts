import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { InspirationPage } from '../inspiration/inspiration';
import { StorePage } from '../store/store';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StorePage;
  tab3Root = ContactPage;
  tab4Root = InspirationPage;
  tab5Root = AboutPage;


  constructor(public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(ContactPage);
      profileModal.present();
    },false);
  }
}
