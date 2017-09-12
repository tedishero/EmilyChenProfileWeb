import { TestBed, inject } from '@angular/core/testing';

import { ProjectFilterService } from './project-filter.service';

describe('ProjectFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectFilterService]
    });
  });

  it('should ...', inject([ProjectFilterService], (service: ProjectFilterService) => {
    expect(service).toBeTruthy();
  }));
});
