import React from 'react'
import { Link } from 'react-router-dom'
import notes from "./../../assets/icon/note.png"
import code from "./../../assets/icon/coding.png"


export default function Menu() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col space-y-5">
        <Link to="/my-notes" className="bg-blue-500 py-5 w-1/2 px-5 justify-center flex 
        rounded-lg space-x-5 items-center">
            <div className="text-white text-5xl font-bold ">
                My Notes
            </div>
            <img src={notes} className="w-12 h-12"/>
        </Link>
        <Link to="/CodesAndSuch" className="bg-yellow-500 py-5 w-1/2 px-5 justify-center 
        flex rounded-lg space-x-5">
            <div className="text-white text-5xl font-bold ">
                Codes And Such
            </div>
            <img src={code} className="w-12 h-12"/>
        </Link>
    </div>
  )
}
