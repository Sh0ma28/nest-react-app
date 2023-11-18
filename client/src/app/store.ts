import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/user.slice'
import tasksReducer from '../features/tasks/tasks.slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
