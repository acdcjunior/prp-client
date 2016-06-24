import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { DialogService }  from './dialog/dialog.service';
import { HeroService }    from './heroes/hero.service';

import {InputText} from 'primeng/primeng';
import {MultiSelect} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {Button} from 'primeng/primeng';

import {CookieService} from 'angular2-cookie/core';

const COOKIE_KEY = "demo";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers:  [
    HeroService,
    DialogService,
    CookieService
  ],
  directives: [ROUTER_DIRECTIVES, InputText, MultiSelect, Button]
})
export class AppComponent implements OnInit {

  title = 'app works!';

  cookieValue: string;

  cities: SelectItem[];

  selectedCity: string[];

  atualizarValorCookie(){
    this._cookieService.put(COOKIE_KEY, this.cookieValue);
  }

  constructor(private _cookieService:CookieService) {
  }

  ngOnInit() {
    this.cities = [];
    this.cities.push({label:'New York', value:'New York'});
    this.cities.push({label:'Rome', value:'Rome'});
    this.cities.push({label:'London', value:'London'});
    this.cities.push({label:'Istanbul', value:'Istanbul'});
    this.cities.push({label:'Paris', value:'Paris'});

    this.cookieValue = this._cookieService.get(COOKIE_KEY);
  }
}
