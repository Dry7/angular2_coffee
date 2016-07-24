/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PhonePipe } from './phone.pipe';

describe('Pipe: Phone', () => {
  it('create an instance', () => {
    let pipe = new PhonePipe();
    expect(pipe).toBeTruthy();
  });
});
