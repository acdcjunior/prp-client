import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Tabelao, TabelaoService } from './tabelao.service';

import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';
import {Dropdown} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';

import {RepositoryService} from "../repository/repository.service";

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let tabelao of tabeloes"
        [class.selected]="isSelected(tabelao)"
        (click)="onSelect(tabelao)">
        <span class="badge">{{tabelao.id}}</span> {{tabelao.name}}
      </li>
    </ul>

    <p-dropdown [options]="cities" [(ngModel)]="selectedCity"></p-dropdown>
    
    <h3 class="first">Basic</h3>
    <p-dataTable [value]="tabeloes">
        <p-column field="id" header="id"></p-column>
        <p-column field="name" header="name"></p-column>
    </p-dataTable>
  `,
  providers: [RepositoryService],
  directives: [DataTable, Column, Dropdown]
})
export class TabelaoListComponent implements OnInit, OnDestroy {

  private tabeloes: Tabelao[] = [];
  private selectedId: number;
  private sub: any;

  private cities: SelectItem[];

  private selectedCity: string;

  constructor(
    private service: TabelaoService,
    private route: ActivatedRoute,
    private router: Router,
    private repository: RepositoryService
  ) {
    this.cities = [{label:'Inicial', value:'IN'}];
  }


  isSelected(tabelao: Tabelao) { return tabelao.id === this.selectedId; }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.selectedId = +params['id'];
        this.repository.getTodos().subscribe(
          (x) => {
            console.log('Next: ', x);
            this.tabeloes.push(x);
          },
          (err) => console.log('Error: %s', err),
          () => console.log('Completed')
        );
      });

    this.repository.getIds().subscribe(
      (x) => {
        console.log('Next: ', x);
        this.cities.push({label: x , value: x});
      },
      (err) => console.log('Error: %s', err),
      () => console.log('Completed')
    );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSelect(tabelao: Tabelao) {
    // Navigate with Absolute link
    this.router.navigate(['/tabelao-center', tabelao.id]);
  }
}
