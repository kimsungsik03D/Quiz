import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './component/Main'
import Creatroom from './component/Creatroom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/creatroom" element={<Creatroom />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
