import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { CookieService } from "angular2-cookie/core";
import { ConfigService } from "./repository/config.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [CookieService, ConfigService],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

}
