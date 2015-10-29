import {Component, View, Input, NgClass} from 'angular2/angular2'
import {TaskModel} from './task-service';

@Component({
  selector: 'task-item'
})

@View({
  directives: [NgClass],
  styles: [`
    .closed {
      color: #999;
      text-decoration: line-through;
    }
  `],
  template: `
    <div [ng-class]="{ closed: task.isClosed() }">
      <input type="checkbox" [checked]="task.isClosed()" (click)="toggleTaskStatus()" />
      <span>{{task.description}}</span>
    </div>
  `
})

export class TaskItem {

  @Input() task: TaskModel

  toggleTaskStatus() {
    this.task.isClosed() ? this.task.open() : this.task.close()
  }

}
