import { Component }            from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';

import { TabelaoService }        from './tabelao.service';

@Component({
  template:  `
    <h2>TABELAO CENTER</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers:  [TabelaoService]
})
export class TabelaoCenterComponent { }
