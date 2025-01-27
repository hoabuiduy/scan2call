import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilProvider } from '../../providers/util/util';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { TabsPage } from '../tabs/tabs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../../models/user';
import { GlobalVariables } from '../../global/global_variable';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var facebookConnectPlugin;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private util: UtilProvider, 
    private db: AngularFirestore,
    private zone: NgZone,
    private af_auth: AngularFireAuth, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.itemsCollection = this.db.collection<any>('users');

  }

  facebookLogin() {
    facebookConnectPlugin.login(["public_profile", "email"], obj => {
      this.util.presentLoading();
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(obj.authResponse.accessToken);
      this.af_auth.auth.signInWithCredential(facebookCredential).then(res => {
        var obj = res.toJSON();
        let user: any = {};
        user['email'] = obj['email'];
        user['name'] = obj['displayName'];
        user['picture'] = obj['photoURL'];
        user['base64'] = btoa(user['email']);
        user['fb_id'] = obj['providerData'][0]['uid'];
        GlobalVariables.user = user;
        var docRef = this.itemsCollection.doc(user['base64']);
        docRef.get().subscribe(doc=>{
          if(!doc.exists){
            this.itemsCollection.doc(user['base64']).set(user).then(()=>{
              this.util.setLocal('user', user);
            }); 
          }else{
            GlobalVariables.user = doc.data();
          }
        })
          
        this.util.stopLoading();   
        this.zone.run(() => {
          this.navCtrl.setRoot(TabsPage);
        });
        this.navCtrl.setRoot(TabsPage);
      })
    }, fail => {
    })
  }
}
