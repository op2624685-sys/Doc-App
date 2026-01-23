import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index.jsx'
import Create from './Pages/Create.jsx'
import Edit from './Pages/Edit.jsx'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'


const App = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <Routes>
        <Route path='Doc-App' element={<Index />} />
        <Route path='Doc-App/create' element={<Create />} />
        <Route path='Doc-App/edit' element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App