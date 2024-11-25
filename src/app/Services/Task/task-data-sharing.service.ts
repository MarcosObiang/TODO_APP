import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../../entities/TaskEntity';

@Injectable({
  providedIn: 'root'
})
export class TaskDataSharingService {
  private taskObject = new Subject<Task>();

  get taskListener():Observable<Task> {
    return this.taskObject.asObservable();
  }

  addTask(task: Task): void {
    this.taskObject.next(task);
  }



  constructor() { }
}
