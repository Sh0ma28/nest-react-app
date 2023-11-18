import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import TaskCreate from './pages/TaskCreate'
import TaskList from './pages/TaskList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task/create" element={<TaskCreate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
