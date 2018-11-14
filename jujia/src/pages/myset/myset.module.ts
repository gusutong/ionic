import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MysetPage } from './myset';

@NgModule({
  declarations: [
    MysetPage,
  ],
  imports: [
    IonicPageModule.forChild(MysetPage),
  ],
})
export class MysetPageModule {}
