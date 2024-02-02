import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import TaskCreate from './pages/TaskCreate'
import Header from './components/header/Header'
import Side from './components/side/Side'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Side />
        <div className="page">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/task/create" element={<TaskCreate />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
