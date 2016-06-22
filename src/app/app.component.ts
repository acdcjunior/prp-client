import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { DialogService }  from './dialog.service';
import { HeroService }    from './heroes/hero.service';

import {InputText} from 'primeng/primeng';
import {MultiSelect} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers:  [
    HeroService,
    DialogService
  ],
  directives: [ROUTER_DIRECTIVES, InputText, MultiSelect]
})
export class AppComponent {
  title = 'app works!';

  cities: SelectItem[];

  selectedCity: string[];

  constructor() {
    this.cities = [];
    this.cities.push({label:'New York', value:'New York'});
    this.cities.push({label:'Rome', value:'Rome'});
    this.cities.push({label:'London', value:'London'});
    this.cities.push({label:'Istanbul', value:'Istanbul'});
    this.cities.push({label:'Paris', value:'Paris'});
  }
}
