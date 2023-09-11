import { Injectable } from '@angular/core';
import { Task } from './tasks/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private localStorageKey = 'tasks';
  private taskIdKey = 'task_id';

  constructor() {}

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  getTasks(): Task[] {
    const storedTasks = localStorage.getItem(this.localStorageKey);
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  saveTaskId(taskId: number): void {
    localStorage.setItem(this.taskIdKey, taskId.toString());
  }

  getTaskId(): number {
    const taskId= localStorage.getItem(this.taskIdKey);
    return taskId ? parseInt(taskId, 10) : 1;
  }
}
