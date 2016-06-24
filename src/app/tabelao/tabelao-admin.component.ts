import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  template:  `
    <h3>TABELAO ADMINISTRATION</h3>
    <p>Manage your tabeloes here</p>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class TabelaoAdminComponent { }
