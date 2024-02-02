import { instance } from '../../api/api.inteceptors'
import { ITask, ITaskCreate } from './task.interface'

export const TaskService = {
  async create(data: ITaskCreate) {
    const response = await instance.post('tasks', data)
    return response.data
  },

  async update(data: ITask) {
    return await instance.patch('tasks', data)
  },

  async delete(id: number) {
    return await instance.delete(`tasks/${id}`)
  },

  async getList() {
    const response = await instance.get('tasks')
    return response.data
  },
}
