import { createSlice } from '@reduxjs/toolkit'
import { ITask } from './task.interface'
import { RootState } from '../../app/store'

const initialState: ITask[] = []

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {},
})

export const selectTasks = (state: RootState) => state.tasks

export default tasksSlice.reducer
