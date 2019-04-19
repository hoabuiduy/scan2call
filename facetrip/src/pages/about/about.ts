import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalVariables } from '../../global/global_variable';
import { EditProfilePage } from '../edit-profile/edit-profile';

declare var cordova;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  user = GlobalVariables.user;
  constructor(public navCtrl: NavController) {

  }

  editProfile(){
    this.navCtrl.push(EditProfilePage, {user: this.user});
  }

  openBrowser(fb_id){
    var ref = cordova.InAppBrowser.open('https://fb.com/'+fb_id, '_blank', 'location=yes');
  }
}
