import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { createTask } from '../features/tasks/tasks.actions'

const TaskCreate = () => {
  const dispatch = useAppDispatch()
  const [taskForm, setTaskForm] = useState({
    title: '',
    description: '',
    parentId: null,
    children: [],
  })

  function handleTaskFormChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) {
    if (e.target.name === 'title')
      setTaskForm({ ...taskForm, title: e.target.value })
    if (e.target.name === 'description')
      setTaskForm({ ...taskForm, description: e.target.value })
  }
  async function taskFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = await dispatch(createTask(taskForm))
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={taskFormSubmit}>
        <input
          placeholder="Заголовок"
          value={taskForm.title}
          name="title"
          onChange={handleTaskFormChange}
        ></input>
        <textarea
          placeholder="Описание"
          value={taskForm.description}
          name="description"
          onChange={handleTaskFormChange}
        ></textarea>
        <button type="submit">Создать</button>
      </form>
    </div>
  )
}

export default TaskCreate
