import {Component, View} from 'angular2/angular2'
import {TaskList} from './task-list'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'

@Component({
  selector: 'task-page'
})

@View({
  directives: [ROUTER_DIRECTIVES, TaskList],
  template: `
    <task-list></task-list>
  `
})

export class TasksPage {

}
