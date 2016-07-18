/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ProductService } from './product.service';

describe('Product Service', () => {
  beforeEachProviders(() => [ProductService]);
});
