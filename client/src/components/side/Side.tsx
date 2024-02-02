import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectTasks } from '../../features/tasks/tasks.slice'
import { selectUser, logout } from '../../features/user/user.slice'
import TaskItem from '../TaskItem'
import './side.css'

const Side = () => {
  const tasks = useAppSelector(selectTasks)
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  return (
    <div className="side">
      <h2>{user ? user.username : 'Вы не авторизованы'}</h2>

      {tasks.map(item => (
        <TaskItem key={item.id} task={item} />
      ))}
    </div>
  )
}

export default Side
