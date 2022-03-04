import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './component/Main'
import Creatroom from './component/Creatroom'
import CovidData from './component/CovidData'
import Login from './component/Login'
import DataGrid from './component/DataGrid'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/createroom" element={<Creatroom />} />
          <Route path="/covid" element={<CovidData />} />
          <Route path="/login" element={<Login />} />
          <Route path="/datagrid" element={<DataGrid />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
