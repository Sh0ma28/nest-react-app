import { useAppSelector } from '../app/hooks'
import { selectTasks } from '../features/tasks/tasks.slice'
import { selectUser } from '../features/user/user.slice'

const TaskList = () => {
  const tasks = useAppSelector(selectTasks)
  const user = useAppSelector(selectUser)

  return (
    <>
      <h2>{user ? user.username : 'Вы не авторизованы'}</h2>

      {tasks.map(item => (
        <>
          <label>{item.title}</label>
          {item.description && <p>{item.description}</p>}
        </>
      ))}
    </>
  )
}

export default TaskList
