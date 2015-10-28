import {Component, View} from 'angular2/angular2'
import {TaskModel} from './task-service';

@Component({
  selector: 'task-item'
})

@View({
  template: `
    <input type="checkbox" /> Todo
  `
})

export class TaskItem {

  name: string

  constructor(task: TaskModel) {}

}
