import React from "react";
import Notes from "../Utility/Notes";
import Add from "./Add";
import Note from "./Note";
import Navbar from "../Utility/Navbar";
import logo from "./../../assets/icon/note.png";
import addIcon from "./../../assets/icon/add.png";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function MyNotes() {
  const header = {
    home: "/my-notes",
    pageName: "My Notes",
    logo: logo,
    add: "/my-notes/add",
    addName: "Add new Note",
    addLogo: addIcon,
  };
  const notesURL = "Notes/GetAllNotes";

  return (
    <div className="w-full">
      <div className="sticky top-0">
        <Navbar header={header} />
      </div>
      <div className="flex flex-wrap justify-center w-full ">
        <Routes>
          <Route path="/" element={<Notes notesURL={notesURL} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/note" element={<Note />} />
        </Routes>
      </div>
    </div>
  );
}
