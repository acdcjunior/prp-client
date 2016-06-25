import { Injectable } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import * as PouchDB from 'pouchdb';
import * as moment from 'moment';

const POUCHDB_URL_KEY = "POUCHDB_URL_KEY";

@Injectable()
export class RepositoryService {

  public pouchdb: any;

  constructor(private _cookieService:CookieService) {
    console.log("Did PouchDB load?", PouchDB);
    console.log("Did MomentJS load?", moment);

    let pouchCookieUrl = this.resolvePouchUrl();
    console.info("Resolved PouchDB URL: ", pouchCookieUrl);
    this.pouchdb = new PouchDB(pouchCookieUrl);//, {ajax: {cache: true}});
  }

  private resolvePouchUrl() {
    let pouchCookieUrl = this._cookieService.get(POUCHDB_URL_KEY);
    if (!pouchCookieUrl) {
      let enteredURL = RepositoryService.askUserForPouchUrl();
      this._cookieService.put(POUCHDB_URL_KEY, enteredURL);
      pouchCookieUrl = enteredURL;
    }
    return pouchCookieUrl;
  }

  private static askUserForPouchUrl() {
    var enteredUrl = undefined;
    let initialUrl = "https://";
    while (!enteredUrl || enteredUrl === initialUrl) {
        enteredUrl = prompt("Enter PouchDB URL", initialUrl);
    }
    return enteredUrl;
  }

}
