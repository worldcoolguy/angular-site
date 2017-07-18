import { TestBed, inject } from '@angular/core/testing';

import { RunningService } from './running.service';

describe('RunningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunningService]
    });
  });

  it('should be created', inject([RunningService], (service: RunningService) => {
    expect(service).toBeTruthy();
  }));
});
