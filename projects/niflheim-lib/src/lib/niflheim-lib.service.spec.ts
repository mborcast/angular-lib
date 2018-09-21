import { TestBed } from '@angular/core/testing';

import { NiflheimLibService } from './niflheim-lib.service';

describe('NiflheimLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NiflheimLibService = TestBed.get(NiflheimLibService);
    expect(service).toBeTruthy();
  });
});
