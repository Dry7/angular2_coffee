/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DatePipe } from './date.pipe';

describe('Pipe: Date', () => {
  it('create an instance', () => {
    let pipe = new DatePipe();
    expect(pipe).toBeTruthy();
  });
});
