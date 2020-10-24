import { TestBed } from '@angular/core/testing';

import { MoviesRequestsService } from './movies-requests.service';

describe('MoviesRequestsService', () => {
  let service: MoviesRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
