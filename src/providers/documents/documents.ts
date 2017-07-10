import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

/*
  Generated class for the DocumentsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DocumentsProvider {

  documents: FirebaseObjectObservable<any>;

  constructor(
    private db: AngularFireDatabase
  ) {
  }

  getAll(uid){
    this.documents = this.db.object(`/documents/${uid}`);
    return this.documents;
  }
  save(newName: string) {
    this.documents.set({ name: newName });
  }
  update() {
    this.documents.update({

        factures:[
          {
            "number": 123,
            "date": "01-10-2017",
            "amount": 250000
          },
          {
            "number": 456,
            "date": "01-10-2017",
            "amount": 20000
          },
          {
            "number": 789,
            "date": "01-08-2017",
            "amount": 200000
          }
        ]

    });
  }
  delete() {
    this.documents.remove();
  }

}
