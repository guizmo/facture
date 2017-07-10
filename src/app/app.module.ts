import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';

import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers';
import { DocumentsProvider } from '../providers/documents/documents';

export const firebaseConfig = {
  apiKey: "AIzaSyDTwLRlMkGY8n-EULbzc8X5YxoAjDJeA5U",
  authDomain: "facture-6dc7e.firebaseapp.com",
  databaseURL: "https://facture-6dc7e.firebaseio.com",
  projectId: "facture-6dc7e",
  storageBucket: "facture-6dc7e.appspot.com",
  messagingSenderId: "269791741654"
};

@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Facebook,
    DocumentsProvider
  ]
})
export class AppModule {}
