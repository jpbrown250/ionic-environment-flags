import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import { LobbyPage } from '../lobby/lobby';

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
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  test: any = {};
  showHome: boolean = false;
  constructor(public navCtrl: NavController,public navParams: NavParams) {}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
    
    this.test = this.navParams.get("test");
    this.showHome = this.navParams.get("showHome");
    let tempLabels = [
      "Avoiding",
      "Accommodating",
      "Compromising",
      "Competing",
      "Collaborating"
    ];
    
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: tempLabels,
        datasets: [{
          data: [
            Math.floor((this.test[tempLabels[0]]/12)*100),
            Math.floor((this.test[tempLabels[1]]/12)*100),
            Math.floor((this.test[tempLabels[2]]/12)*100),
            Math.floor((this.test[tempLabels[3]]/12)*100),
            Math.floor((this.test[tempLabels[4]]/12)*100)
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              max: 100
            }
          }]
        },
        legend: {
          display: false
       },
       tooltips: {
          enabled: false
       }
      }
    });
  }
  toLobby() {
    this.navCtrl.setRoot(LobbyPage);
  }
  
}
