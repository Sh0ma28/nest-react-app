import { createAsyncThunk } from '@reduxjs/toolkit'
import { TaskService } from './task.service'
import { ITask, ITaskCreate } from './task.interface'

export const createTask = createAsyncThunk<ITask, ITaskCreate>(
  'tasks',
  async (data, thunkApi) => {
    try {
      const response = await TaskService.create(data)
      return response
    } catch (error) {
      throw thunkApi.rejectWithValue(error)
    }
  },
)
export const updateTask = createAsyncThunk('auth/login', TaskService.create)
export const deleteTask = createAsyncThunk('auth/login', TaskService.create)
export const getAll = createAsyncThunk<ITask[]>(
  'tasks',
  async (_, thunkApi) => {
    try {
      const response = TaskService.getList()
      return response
    } catch (error) {
      throw thunkApi.rejectWithValue(error)
    }
  },
)
export const getById = createAsyncThunk('auth/login', TaskService.create)
