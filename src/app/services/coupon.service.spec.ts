/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CouponService } from './coupon.service';

describe('Coupon Service', () => {
  beforeEachProviders(() => [CouponService]);

  it('should ...',
      inject([CouponService], (service: CouponService) => {
    expect(service).toBeTruthy();
  }));
});
