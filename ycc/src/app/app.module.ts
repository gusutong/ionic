import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MyPage } from '../pages/my/my';
import { LoginPage } from '../pages/login/login';
import { ZhucePage } from '../pages/zhuce/zhuce';
import { AccountPage } from '../pages/account/account';
import { AlbumPage } from '../pages/album/album';
import { VideoPage } from '../pages/video/video';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SharePage } from '../pages/share/share';
import { SetupPage } from '../pages/setup/setup';
import { CreationPage } from '../pages/creation/creation';
import { FollowPage } from '../pages/follow/follow';
import { FansPage } from '../pages/fans/fans';
import { HomepagePage } from '../pages/homepage/homepage';
import { EditPage } from '../pages/edit/edit';

import { ShequPage } from '../pages/shequ/shequ';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyPage,
    ShequPage,
    LoginPage,
    ZhucePage,
    AccountPage,
    AlbumPage,
    VideoPage,
    FeedbackPage,
    SharePage,
    SetupPage,
    CreationPage,
    FollowPage,
    FansPage,
    HomepagePage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyPage,
    ShequPage,
    LoginPage,
    ZhucePage,
    AccountPage,
    AlbumPage,
    VideoPage,
    FeedbackPage,
    SharePage,
    SetupPage,
    CreationPage,
    FollowPage,
    FansPage,
    HomepagePage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
