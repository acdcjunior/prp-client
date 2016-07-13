import { Component, OnInit } from '@angular/core';

import {InputText} from 'primeng/primeng';
import {MultiSelect} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {Button} from 'primeng/primeng';

import {CookieService} from 'angular2-cookie/core';
import { RepositoryService } from '../repository/repository.service'
import {ConfigService} from "../repository/config.service";

const COOKIE_KEY = "demo";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  template: `
    <p>
      {{title}}
    </p>
    <br>
    <label>main:   <input type="text" pInputText [(ngModel)]="main" size="50" /></label><br>
    <label>listas: <input type="text" pInputText [(ngModel)]="listas" /></label><br>
    <label>cc:     <input type="text" pInputText [(ngModel)]="cc" /></label><br>
    <button pButton type="button" label="Atualizar Valores Config" (click)="atualizarValoresConfig()"></button>
  `,
  styleUrls: ['home.component.css'],
  providers:  [
    ConfigService,
    RepositoryService
  ],
  directives: [InputText, MultiSelect, Button]
})
export class HomeComponent implements OnInit {

  title:string = 'HOME works!';
  private main: string;
  private listas: string;
  private cc: string;

  //noinspection JSUnusedGlobalSymbols
  atualizarValoresConfig(){
    this.configService.main = this.main;
    this.configService.listas = this.listas;
    this.configService.cc = this.cc;
  }

  constructor(private configService:ConfigService, private _repositoryService: RepositoryService) {
  }

  ngOnInit() {
    this.main = this.configService.main;
    this.listas = this.configService.listas;
    this.cc = this.configService.cc;
  }


}
