
enum TaskStatus { Open, Close }

export class TaskModel {

  description: string
  status: TaskStatus

  constructor(description: string) {
    this.description = description
    this.status = TaskStatus.Open
  }

  close() {
    this.status = TaskStatus.Close
  }

  open() {
    this.status = TaskStatus.Open
  }

}

export class TaskService {

  private todos: Array<TaskModel> = []

  createTask(task: TaskModel) {
    this.todos.push(task)
    console.log(this.todos)
  }

  taskList(): Array<TaskModel> {
    return this.todos
  }

}
