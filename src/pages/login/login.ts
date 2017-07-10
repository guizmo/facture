import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider
  ) {
    console.log('constructor LoginPage', this);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signInWithFacebook(): void {
    this.authProvider.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  signInWithGoogle(): void {
    this.authProvider.signInWithGoogle()
      .then(() => this.onSignInSuccess());
  }
  signOut(): void {
    this.authProvider.signOut();
  }

  private onSignInSuccess(): void {
    console.log("display name ",this.authProvider.displayName());
    this.navCtrl.setRoot('HomePage');
  }

}
