import {bootstrap, Component, View} from 'angular2/angular2'
import {TaskInput} from './task-input'
import {TaskService} from './task-service'
import {TaskList} from './task-list'

@Component({
  selector: 'app'
})

@View({
  directives: [TaskInput, TaskList],
  template: `
    <div>
      <task-input></task-input>
      <task-list></task-list>
    </div>
  `
})

class App {

}

bootstrap(App, [TaskService])
