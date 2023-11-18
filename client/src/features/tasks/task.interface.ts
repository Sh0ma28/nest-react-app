export enum EnumTaskStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETE = 'COMPLETE',
}

export interface ITask {
  title: string
  description: string | null
  status: EnumTaskStatus
  parent: ITask | null
  children: ITask[]
}
