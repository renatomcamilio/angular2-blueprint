import {bootstrap, Component, View} from 'angular2/angular2'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router'
import {TaskService} from './tasks/task-service'
import {TasksPage} from './tasks/tasks-page'
import {TasksCreatePage} from './tasks/tasks-create-page'
import {TabBar} from './navigation/tab-bar'

@Component({
  selector: 'app'
})

@View({
  directives: [ROUTER_DIRECTIVES, TasksPage, TabBar],
  styles: [`
    tab-bar {
      background-color: #393F4B;
      display: inline-block;
      width: 100%;
      height: 44px;
    }
  `],
  template: `
    <router-outlet></router-outlet>
    <tab-bar></tab-bar>
  `
})

@RouteConfig([
  { path: '/', redirectTo: '/tasks' },
  { path: '/tasks', as: 'TasksPage', component: TasksPage },
  { path: '/tasks/create', as: 'TasksCreatePage', component: TasksCreatePage }
])

class App {

  constructor(
    public router: Router
  ) {}

}

bootstrap(App, [ROUTER_PROVIDERS, TaskService])
