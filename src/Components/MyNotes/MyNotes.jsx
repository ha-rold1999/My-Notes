import React from 'react'
import Notes from './Notes';
import Header from './Header';
import Add from "./Add"
import Note from "./Note"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function MyNotes() {
  return (
    <Router>
        <div className="w-full">
          <div className="sticky top-0">
            <Header />
          </div>
          <div className="flex flex-wrap justify-center w-full ">
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="/add" element={<Add />} />
              <Route path="/note" element={<Note />} />
            </Routes>
          </div>
        </div>
      </Router>
  )
}
