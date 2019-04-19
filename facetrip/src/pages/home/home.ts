import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalVariables } from '../../global/global_variable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = GlobalVariables.user;
  
  constructor(public navCtrl: NavController) {

  }

}
