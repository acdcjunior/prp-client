import { RouterConfig }          from '@angular/router';
import { TabelaoDetailComponent } from './tabelao-detail.component';
import { TabelaoListComponent }   from './tabelao-list.component';
import { TabelaoCenterComponent } from './tabelao-center.component';
import { TabelaoAdminComponent }  from './tabelao-admin.component';

import { CanDeactivateGuard }    from '../interfaces';
import { AuthGuard }             from '../auth/auth.guard';

export const TabelaoCenterRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/tabelao-center',
    terminal: true
  },
  {
    path: 'tabelao-center',
    component: TabelaoCenterComponent,
    children: [
      {
        path: 'admin',
        component: TabelaoAdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: TabelaoDetailComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: TabelaoListComponent
      }
    ]
  }
];
