import { TestBed } from '@angular/core/testing';

import { MercadinhoService } from './mercadinho.service';

describe('MercadinhoService', () => {
  let service: MercadinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercadinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
