import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { TabsPage } from "../tabs/tabs";
import { ZhucePage } from "../zhuce/zhuce"
@NgModule({
  declarations: [
    LoginPage,
    TabsPage,
    ZhucePage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  entryComponents: [
    LoginPage,
    TabsPage,
    ZhucePage
  ],
})
export class LoginPageModule {}
