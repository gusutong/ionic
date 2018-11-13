import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
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


  constructor() {

  }
}
