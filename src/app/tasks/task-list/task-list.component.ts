import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  task_id = this.taskService.getTaskId();
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTaskToList() {
    // check if task text is not empty
    if(/\S/.test((<HTMLInputElement>document.getElementById('task_name_field')).value)) {
      this.tasks.push(new Task((<HTMLInputElement>document.getElementById('task_name_field')).value, this.task_id));
      this.task_id++;
      this.saveTasks();
      this.taskService.saveTaskId(this.task_id);
    } 
  }

  deleteTaskFromList(task: Task): void{
    this.tasks = this.tasks.filter(t => t.id !== task.id); // delete task with matching id
    this.taskService.saveTasks(this.tasks);
}

saveTasks(): void {
  this.taskService.saveTasks(this.tasks);
}
}
