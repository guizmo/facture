import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { DocumentsProvider } from '../../providers/documents/documents';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

/**
 * Generated class for the DocumentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html',
})
export class DocumentsPage {

  factures;
  documents;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private docProvider: DocumentsProvider
  ) {
    afAuth.authState.subscribe((user) => {
      if (user) {
        console.log(this)
        this.documents = this.docProvider.getAll(user.uid);
        this.documents.subscribe( data =>{
          this.factures = data.factures;
        });
      }
      //this.docProvider.get();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentsPage');
  }

  save() {
    this.docProvider.update();
  }

}
