import Header from "./Header"
import Codes from "./Codes"
import Code from "./Code"
import { Routes, Route } from "react-router-dom"

export default function CodesAndSuch() {
  
  return (
    <div className="w-full">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="flex flex-wrap justify-center w-full ">
        <Routes>
          <Route path="/" element={<Codes/>}/>
          {/* <Route path="/add" element={<Add />} />
          <Route path="/note" element={<Note />} /> */}
          <Route path="/code" element={<Code/>}/>
        </Routes>
      </div>
    </div>
  )
}
