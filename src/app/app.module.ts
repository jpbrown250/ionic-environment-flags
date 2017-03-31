import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { LobbyPage } from '../pages/lobby/lobby';
import { QuestionPage } from '../pages/question/question';
import { HistoryPage } from '../pages/history/history';
import { ResultsPage } from '../pages/results/results';

import { AppConfig } from '../providers/app-config';

let injections: any[] = [
  MyApp,
  LobbyPage,
  QuestionPage,
  HistoryPage,
  ResultsPage
]

@NgModule({
  declarations: injections,
  imports: [
    IonicModule.forRoot(MyApp),
    // ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppConfig
  ]
})
export class AppModule {}
