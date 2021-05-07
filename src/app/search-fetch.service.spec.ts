import { TestBed } from '@angular/core/testing';

import { SearchFetchService } from './search-fetch.service';

describe('SearchFetchService', () => {
  let service: SearchFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
