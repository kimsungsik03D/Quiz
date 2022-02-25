import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Creatroom from './Creatroom'

function App() {
  return (
    <div>
      <Router>
        {/*<Route path="/" component={Main} />*/}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/creatroom" element={<Creatroom />} />
        </Routes>
      </Router>
    </div>
    // <div className="App">
    //   <div>
    //       <Main/>
    //     App.js파일 입니다.
    //   </div>
    // </div>
  )
}

export default App
