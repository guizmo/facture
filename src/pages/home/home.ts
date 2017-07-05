import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider
  ) {
    if(authProvider.authenticated){
      console.log('in home constructor: is authenticated')
    }else{
      console.log('in home constructor: is NOT authenticated')
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if(this.authProvider.authenticated){
      console.log('in home ionViewDidLoad: is authenticated')
    }else{
      console.log('in home ionViewDidLoad: is NOT authenticated')
    }
  }

}
