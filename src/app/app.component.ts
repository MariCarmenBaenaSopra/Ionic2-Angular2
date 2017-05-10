import { ListPage } from './../pages/list/list';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Auth } from '@ionic/cloud-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  /*@ViewChild(Nav) nav: Nav;*/

  rootPage = LoginPage;
  pages: Array<{ title: string, component: any }>;
  
  constructor(platform: Platform, public auth: Auth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      if (this.auth.isAuthenticated()) {
        /*this.rootPage = HomePage;*/
        /*this.initializeApp();*/

        // set our app's pages
        this.pages = [
          { title: 'Planta 2', component: ListPage },
          { title: 'Planta 3', component: ListPage },
          { title: 'Planta 8', component: ListPage },
          { title: 'Planta 9', component: ListPage }
        ];
      } else {
        this.rootPage = LoginPage;
      }

    });
}
}
