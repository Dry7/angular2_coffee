/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CouponsComponent } from './coupons.component';

describe('Component: Coupons', () => {
  it('should create an instance', () => {
    let component = new CouponsComponent();
    expect(component).toBeTruthy();
  });
});
