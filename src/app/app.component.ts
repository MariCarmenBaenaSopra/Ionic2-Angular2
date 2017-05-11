import { HomePage } from './../pages/home/home';
import { ListPage } from './../pages/list/list';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { Auth } from '@ionic/cloud-angular';

@Component({
  selector: 'page-app',
  templateUrl: 'app.html'
})
export class MyApp {
  /**Nav: NavController --> componente de navegacion */
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,    /**Platform      --> obtener informacion sobre el dispositivo que se esta usando (tablet, mv, etc) */
    public auth: Auth,           /**auth           --> autentificacion email/password */
    public menu: MenuController  /**MenuController --> proveedor que facilita el control de 1 menu */
  ) {
    this.initializeApp();
  
   // set our app's pages
    this.pages = [
          { title: 'Floor 2', component: ListPage },
          { title: 'Floor 3', component: ListPage },
          { title: 'Floor 8', component: ListPage },
          { title: 'Floor 9', component: ListPage }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      if (this.auth.isAuthenticated()) {
        /*this.rootPage = HomePage;*/
      } else {
        this.rootPage = LoginPage;
      }

    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();  /**cerrar el menu (menuToggle) */
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  return() {
    this.menu.close();          /**cerrar el menu (menuToggle)*/
    this.nav.setRoot(HomePage); /**Enviar a la pagina deseada = HomePage */
  }

}
