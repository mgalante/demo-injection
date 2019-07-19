import { TestBed } from '@angular/core/testing';

import { ChildAService } from './child-a.service';

describe('ChildAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChildAService = TestBed.get(ChildAService);
    expect(service).toBeTruthy();
  });
});
