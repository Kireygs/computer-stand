import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BuildPage } from '../pages/build/build';
import { InfoPage } from '../pages/info/info';
import { VideoPage } from '../pages/video/video';
import { AuthorPage } from '../pages/author/author';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComputersProvider } from '../providers/computers/computers';
import { ComputersPage } from '../pages/computers/computers';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers, Response, HttpModule} from '@angular/http';
import { VideoDetailPage } from '../pages/video-detail/video-detail';
import { ComputersDetailPage } from '../pages/computers-detail/computers-detail';
import { BuildDetailPage } from '../pages/build-detail/build-detail';
import { BuildProvider } from '../providers/build/build';
import { LoginPage } from '../pages/login/login';
import { RegPage } from '../pages/reg/reg';
import { ProfileProvider } from '../providers/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    BuildPage,
    InfoPage,
    VideoPage,
    AuthorPage,
    TabsPage,
    ComputersPage,
    VideoDetailPage,
    ComputersDetailPage,
    BuildDetailPage,
    LoginPage,
    RegPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BuildPage,
    InfoPage,
    VideoPage,
    AuthorPage,
    TabsPage,
    ComputersPage,
    VideoDetailPage,
    ComputersDetailPage,
    BuildDetailPage,
    LoginPage,
    RegPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ComputersProvider,
    BuildProvider,
    ProfileProvider
  ]
})
export class AppModule {}
