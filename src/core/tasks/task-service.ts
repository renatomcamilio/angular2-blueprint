
export enum TaskStatus { Open, Closed }

export class TaskModel {

  description: string
  status: TaskStatus

  constructor(description: string, status: TaskStatus = TaskStatus.Open) {
    this.description = description
    this.status = status
  }

  close() {
    this.status = TaskStatus.Closed
  }

  open() {
    this.status = TaskStatus.Open
  }

  isClosed(): boolean {
    return this.status == TaskStatus.Closed
  }

}

export class TaskService {

  private tasks: Array<TaskModel> = [
    new TaskModel("buy milk"),
    new TaskModel("buy eggs", TaskStatus.Closed),
  ]

  createTask(task: TaskModel) {
    this.tasks.push(task)
    console.log(this.tasks)
  }

  taskList(): Array<TaskModel> {
    return this.tasks
  }

}
