import { TestBed } from '@angular/core/testing';

import { WorkersserService } from './workersser.service';

describe('WorkersserService', () => {
  let service: WorkersserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkersserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
