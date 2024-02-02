import { createSlice } from '@reduxjs/toolkit'
import { ITask } from './task.interface'
import { RootState } from '../../app/store'
import { createTask } from './tasks.actions'
import { TaskService } from './task.service'

const initialState: ITask[] = localStorage.getItem('user')
  ? await TaskService.getList()
  : []

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createTask.pending, state => {})
      .addCase(createTask.fulfilled, (state, action) => {
        state = [...state, action.payload]
      })
      .addCase(createTask.rejected, state => {})
  },
})

export const selectTasks = (state: RootState) => state.tasks

export default tasksSlice.reducer
