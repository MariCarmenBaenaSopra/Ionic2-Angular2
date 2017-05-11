import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-component',
  templateUrl: 'component.html'
})

export class ComponentPage {
  constructor(public navCtrl: NavController) {}
}