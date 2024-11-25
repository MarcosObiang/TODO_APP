import { TestBed } from '@angular/core/testing';

import { TaskDataSharingService } from './task-data-sharing.service';

describe('TaskDataSharingService', () => {
  let service: TaskDataSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDataSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
