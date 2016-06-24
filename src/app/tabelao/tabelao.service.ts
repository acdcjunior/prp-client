export class Tabelao {
  constructor(public id: number, public name: string) { }
}

const TABELOES = [
  new Tabelao(1, 'Jaspion'),
  new Tabelao(2, 'Changeman'),
  new Tabelao(3, 'Jiban'),
  new Tabelao(4, 'Black Kamen Raider'),
];

let tabeloesPromise = Promise.resolve(TABELOES);

import { Injectable } from '@angular/core';

@Injectable()
export class TabelaoService {

  static nextTabelaoId = 100;

  static getTabeloes() { return tabeloesPromise; }

  getTabelao(id: number | string) {
    return tabeloesPromise.then(tabeloes => tabeloes.filter(c => c.id === +id)[0]);
  }

  addTabelao(name: string) {
    name = name.trim();
    if (name) {
      let tabelao = new Tabelao(TabelaoService.nextTabelaoId++, name);
      tabeloesPromise.then(tabeloes => tabeloes.push(tabelao));
    }
  }

}
