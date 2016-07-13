import { Injectable } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import * as PouchDB from 'pouchdb';
import * as moment from 'moment';
import { Observable }     from 'rxjs/Observable';
import { ConfigService } from "./config.service";

@Injectable()
export class RepositoryService {

  public pouchdb: any;

  constructor(private configService:ConfigService) {
    console.log("Did PouchDB load?", PouchDB);
    console.log("Did MomentJS load?", moment);

    let pouchUrl = this.configService.mainUrl + '/' + this.configService.listas;
    console.info("Resolved PouchDB URL: ", pouchUrl);
    this.pouchdb = new PouchDB(pouchUrl);//, {ajax: {cache: true}});
  }

  getTodos(): Observable<any> {
    return Observable
      .fromPromise(this.pouchdb.allDocs({ include_docs: true }))
      .flatMap(({ rows }:any) => rows)
      .map(({ doc }:any) => doc)
      .map(({_id, title}: any) => ({id: _id, name: title}));
  }

  getIds(): Observable<any> {
    return Observable
      .fromPromise(this.pouchdb.allDocs({ include_docs: false }))
      .flatMap(({ rows }:any) => rows)
      .map(({ id }:any) => id);
  }

}
