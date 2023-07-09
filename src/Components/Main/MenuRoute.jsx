import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNotes from "./../MyNotes/MyNotes"
import CodesAndSuch from '../CodesAndSuch/CodesAndSuch'
import Menu from './Menu'

export default function MenuRoute() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/my-notes/*' element={<MyNotes/>}/>
          <Route path='/CodesAndSuch' element={<CodesAndSuch/>}/>
      </Routes>
    </Router>
    
  )
}
