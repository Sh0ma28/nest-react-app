export interface ITask {
  id: number
  title: string
  description: string | null
  isCompleted: boolean
  parent: ITask | null
  children: ITask[]
}

export interface ITaskCreate {
  title: string
  description: string | null
  parentId: number | null
}
