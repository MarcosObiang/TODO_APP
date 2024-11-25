import { TestBed } from '@angular/core/testing';

import { TaskDataSourceService } from './task-data-source.service';

describe('TaskDataSourceService', () => {
  let service: TaskDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
