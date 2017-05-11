import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /**Nav: NavController --> componente de navegacion */
  /**auth --> autentificacion email/password */
  constructor(public navCtrl: NavController, public user:User, public auth:Auth) {
    console.log(user);
  }

  logout() {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
