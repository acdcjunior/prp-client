/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CookieService } from "angular2-cookie/core";
import {RepositoryService} from "../repository/repository.service";

class MockCookieService extends CookieService {
  getObject(key:string):Object{
      return "mock";
  }
}

class MockRepositoryService {
  public pouchdb: any;
}

beforeEachProviders(() => [
  HomeComponent,
  { provide: CookieService, useClass: MockCookieService },
  { provide: RepositoryService, useClass: MockRepositoryService }
]);

describe('Component: Home', () => {
  it('should create an instance',
    inject([HomeComponent], (home: HomeComponent) => {
      expect(home).toBeTruthy();
    }));

  it('should have as title \'HOME works!\'',
    inject([HomeComponent], (home: HomeComponent) => {
      expect(home.title).toEqual('HOME works!');
    }));
});
