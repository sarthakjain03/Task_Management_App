import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskListPage from './pages/TaskListPage'
import AddTasks from './pages/AddTasks'
import Header from './components/Header'

function App() {
  

  return (
    <>
      <div className='bg-slate-100 min-h-screen'>
        <BrowserRouter>
          <Header />
          <div>
            <Routes>

              <Route path='/' element={<TaskListPage />} />
              <Route path='/addtask' element={<AddTasks />} />

            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
