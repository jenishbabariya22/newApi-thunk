import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './pages/View'
import Add from './pages/Add'
import Edit from './pages/Edit'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<View/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='edit/:id' element={<Edit/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
