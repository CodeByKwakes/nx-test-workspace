import { TestBed } from '@angular/core/testing';

import { PageOneApiService } from './page-one-api.service';

describe('PageOneApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageOneApiService = TestBed.get(PageOneApiService);
    expect(service).toBeTruthy();
  });
});
