import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { ChartsModule } from 'ng2-charts/ng2-charts';

/*
  Generated class for the Results page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {
  constructor(public navCtrl: NavController,public navParams: NavParams) {}
  ionViewDidLoad() {
    console.log(this.navParams.get("test"));
    console.log('ionViewDidLoad ResultsPage');
  }
  
  
}
