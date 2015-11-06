import {Pipe} from 'angular2/angular2'
import {TaskModel} from './task-service'

@Pipe({
  name: 'tasksWithStatus',
  pure: false
})

export class TasksWithStatusFilter {

  transform(taskList, taskStatus) {
    console.log('filtering')

    return taskList.filter((task: TaskModel) => {
      if (taskStatus == 'closed') {
        return task.isClosed()
      } else {
        return !task.isClosed()
      }
    })
  }

}
