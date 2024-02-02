import { ITask } from '../features/tasks/task.interface'
import './taskitem.css'

interface TaskItemProps {
  key: number
  task: ITask
}

const TaskItem = ({ task }: TaskItemProps) => {
  return <div className="item">{task.title}</div>
}

export default TaskItem
