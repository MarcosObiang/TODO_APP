import { Injectable } from '@angular/core';
import { Task } from '../../entities/TaskEntity';
import { TaskDataSharingService } from './task-data-sharing.service';



@Injectable({
  providedIn: 'root'
})
export class TaskCreatorService {

  private taskDataSharingService: TaskDataSharingService


  constructor(
    taskDataSharingService: TaskDataSharingService
  ) {
    this.taskDataSharingService = taskDataSharingService;
  }


  createTask(taskName: string, taskDeadLine: Date, taskDescription: string): void {
    let task: Task = new Task(this.generateTaskId(), taskName, taskDeadLine, taskDescription);
    this.taskDataSharingService.addTask(task);
  }

  generateTaskId(): string {
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  }
}
