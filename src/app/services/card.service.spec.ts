/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CardService } from './card.service';

describe('Card Service', () => {
  beforeEachProviders(() => [CardService]);

  it('should ...',
      inject([CardService], (service: CardService) => {
    expect(service).toBeTruthy();
  }));
});
