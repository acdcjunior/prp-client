import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeRoutes }       from './home/home.routes';
import { CrisisCenterRoutes } from './crisis-center/crisis-center.routes';
import { TabelaoCenterRoutes } from './tabelao/tabelao-center.routes';
import { HeroesRoutes }       from './heroes/heroes.routes';

import { LoginRoutes,
         AUTH_PROVIDERS }     from './login.routes';

import { CanDeactivateGuard } from './interfaces';

export const routes: RouterConfig = [
  ...HomeRoutes,
  ...HeroesRoutes,
  ...LoginRoutes,
  ...CrisisCenterRoutes,
  ...TabelaoCenterRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS,
  CanDeactivateGuard
];
