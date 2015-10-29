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
      <task-item *ng-for="#task of taskService.taskList() | tasksWithStatus:'open'" [task]="task"></task-item>

      <h3>Closed</h3>
      <task-item *ng-for="#task of taskService.taskList() | tasksWithStatus:'closed'" [task]="task"></task-item>
    </div>
  `
})

export class TaskList {

  constructor(
    public taskService: TaskService
  ) {}

}
