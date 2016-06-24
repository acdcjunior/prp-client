import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Tabelao, TabelaoService } from './tabelao.service';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let tabelao of tabeloes"
        [class.selected]="isSelected(tabelao)"
        (click)="onSelect(tabelao)">
        <span class="badge">{{tabelao.id}}</span> {{tabelao.name}}
      </li>
    </ul>
  `,
})
export class TabelaoListComponent implements OnInit, OnDestroy {
  tabeloes: Tabelao[];
  private selectedId: number;
  private sub: any;

  constructor(
    private service: TabelaoService,
    private route: ActivatedRoute,
    private router: Router) { }

  isSelected(tabelao: Tabelao) { return tabelao.id === this.selectedId; }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.selectedId = +params['id'];
        TabelaoService.getTabeloes()
          .then(tabeloes => this.tabeloes = tabeloes);
      });
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
