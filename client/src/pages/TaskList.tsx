import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectTasks } from '../features/tasks/tasks.slice'
import { logout, selectUser } from '../features/user/user.slice'

const TaskList = () => {
  const tasks = useAppSelector(selectTasks)
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  return (
    <>
      <button onClick={() => dispatch(logout())}>Выйти</button>
      <h2>{user ? user.username : 'Вы не авторизованы'}</h2>

      {tasks.map(item => (
        <div key={item.id}>
          <label>{item.title}</label>
          {item.description && <p>{item.description}</p>}
        </div>
      ))}
    </>
  )
}

export default TaskList
