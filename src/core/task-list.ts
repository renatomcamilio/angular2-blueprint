import {Component, View, NgFor} from 'angular2/angular2'
import {TaskService, TaskStatus} from './task-service'
import {TaskItem} from './task-item'
import {TasksWithStatusFilter} from './task-with-status-filter'

@Component({
  selector: 'task-list'
})

@View({
  pipes: [TasksWithStatusFilter],
  directives: [NgFor, TaskItem],
  template: `
    <div>
      <h3>Open</h3>
      <task-item *ng-for="#task of taskService.taskList() | tasksWithStatus:taskStatus" [task]="task"></task-item>
      <button (click)="toggleTaskStatus()">toggle visible</button>
    </div>
  `
})

export class TaskList {

  taskStatus = 'open'

  constructor(
    public taskService: TaskService
  ) {}

  toggleTaskStatus() {
    if (this.taskStatus == 'open') {
      this.taskStatus = 'closed'
    } else {
      this.taskStatus = 'open'
    }
  }

}
