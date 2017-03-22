import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { QuestionPage } from '../question/question';
import { HistoryPage } from '../history/history';

/*
  Generated class for the Lobby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})
export class LobbyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }
  
  takeTest() {
    this.navCtrl.push(QuestionPage);
  }
  
  toHistory() {
    this.navCtrl.push(HistoryPage);
  }

}
