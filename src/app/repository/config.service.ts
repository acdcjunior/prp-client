import {Injectable} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

enum ConfigKeys {
  MainUrl,
  ListasDb,
  CcDb
}

@Injectable()
export class ConfigService {

  constructor(private _cookieService:CookieService) { }

  private put(key:ConfigKeys, valor:string) {
    this._cookieService.put(ConfigKeys[key], valor);
  }

  private get(key:ConfigKeys) {
    return this._cookieService.get(ConfigKeys[key]);
  }

  public get main() {
    return this.get(ConfigKeys.MainUrl);
  }

  public set main(valor:string) {
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
