import {Component, View} from 'angular2/angular2'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {TaskInput} from './task-input'

@Component({
  selector: 'task-create-page'
})

@View({
  directives: [ROUTER_DIRECTIVES, TaskInput],
  template: `
    <a [router-link]="['/TasksPage']">&lt; Tasks List</a>
    <task-input></task-input>
  `
})

export class TasksCreatePage {

}
