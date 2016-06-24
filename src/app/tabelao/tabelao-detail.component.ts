import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { Observable }                   from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { Tabelao, TabelaoService } from './tabelao.service';
import { DialogService } from '../dialog/dialog.service';

@Component({
  template: `
  <div *ngIf="tabelao">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{tabelao.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
  `,
  styles: ['input {width: 20em}']
})

export class TabelaoDetailComponent implements OnInit, OnDestroy {
  tabelao: Tabelao;
  editName: string;
  private sub: any;

  constructor(
    private service: TabelaoService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
    ) { }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        let id = +params['id'];
        this.service.getTabelao(id)
          .then(tabelao => {
            if (tabelao) {
              this.editName = tabelao.name;
              this.tabelao = tabelao;
            } else { // id not found
              this.gotoTabeloes();
            }
          });
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  cancel() {
    this.gotoTabeloes();
  }

  save() {
    this.tabelao.name = this.editName;
    this.gotoTabeloes();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no tabelao or the tabelao is unchanged
    if (!this.tabelao || this.tabelao.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    let p = this.dialogService.confirm('Discard changes?');
    let o = Observable.fromPromise(p);
    return o;
  }

  gotoTabeloes() {
    let tabelaoId = this.tabelao ? this.tabelao.id : null;
    // Pass along the hero id if available
    // so that the TabelaoListComponent can select that hero.
    // Add a totally useless `foo` parameter for kicks.
    // Absolute link
    this.router.navigate(['/tabelao-center', {id: tabelaoId, foo: 'foo'}]);
  }
}
