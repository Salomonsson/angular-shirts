import { TestBed } from '@angular/core/testing';

import { ShirtService } from './shirt.service';

describe('ShirtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShirtService = TestBed.get(ShirtService);
    expect(service).toBeTruthy();
  });
});
