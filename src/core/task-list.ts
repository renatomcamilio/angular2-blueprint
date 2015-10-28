import {Component, View, NgFor} from 'angular2/angular2'
import {TaskService} from './task-service';

@Component({
  selector: 'task-list'
})

@View({
  directives: [NgFor],
  template: `
    <div>
      <div *ng-for="#task of taskService.taskList()">
      {{task.description}}
      </div>
    </div>
  `
})

export class TaskList {

  constructor(
    public taskService: TaskService
  ) {}

}
