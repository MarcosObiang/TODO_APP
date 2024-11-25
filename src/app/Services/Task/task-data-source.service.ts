import { Injectable, OnInit } from '@angular/core';
import { Task } from '../../entities/TaskEntity';
import { TaskDataSharingService } from './task-data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class TaskDataSourceService implements OnInit {

  private taskDataSharingService: TaskDataSharingService
  private taskList: Task[] = [];




  constructor(
    taskDataSharingService: TaskDataSharingService,
  ) {
    this.taskDataSharingService = taskDataSharingService;
  }
  ngOnInit(): void {
    this.taskDataSharingService.taskListener.subscribe(task => {
      this.taskList.push(task);
    })
  }

  getTaskList(): Task[] {
    return this.taskList;
  }
}
