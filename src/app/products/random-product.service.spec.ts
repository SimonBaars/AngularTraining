import { TestBed } from '@angular/core/testing';

import { RandomProductService } from './random-product.service';

describe('RandomProductService', () => {
  let service: RandomProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
