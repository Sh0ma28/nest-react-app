import { ChangeEvent, FormEvent, useState } from 'react'
import { useAxios } from '../api/api.inteceptors'

const TaskCreate = () => {
  const api = useAxios()
  const [taskForm, setTaskForm] = useState({
    title: '',
    description: '',
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
    const data = await api.post('tasks', taskForm)
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
