/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FullNamePipe } from './full-name.pipe';

describe('Pipe: FullName', () => {
  it('create an instance', () => {
    let pipe = new FullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
