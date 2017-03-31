import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppConfig provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppConfig {

  constructor() {}
  static get apiUrl() {
    const apiUrlConst = "www.your-prod-site.com"
    return apiUrlConst
  }
  static get someApiKey() {
    const someApiKeyConst = undefined
    return someApiKeyConst
  }
  
}
