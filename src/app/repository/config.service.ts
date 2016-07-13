import {Injectable} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

enum ConfigKeys {
  MainUrl,
  ListasDb,
  CcDb
}
const TEN_YEARS_FROM_NOW: Date = new Date(new Date().setFullYear(new Date().getFullYear() + 10));

@Injectable()
export class ConfigService {

  constructor(private _cookieService:CookieService) { }

  private put(key:ConfigKeys, valor:string) {
    this._cookieService.put(ConfigKeys[key], valor, {expires: TEN_YEARS_FROM_NOW});
  }

  private get(key:ConfigKeys) {
    return this._cookieService.get(ConfigKeys[key]);
  }

  public get mainUrl() {
    return this.get(ConfigKeys.MainUrl);
  }

  public set mainUrl(valor:string) {
    this.put(ConfigKeys.MainUrl, valor);
  }

  public get listas() {
    return this.get(ConfigKeys.ListasDb);
  }

  public set listas(valor:string) {
    this.put(ConfigKeys.ListasDb, valor);
  }

  public get cc() {
    return this.get(ConfigKeys.CcDb);
  }

  public set cc(valor:string) {
    this.put(ConfigKeys.CcDb, valor);
  }

}
