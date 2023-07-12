import React from "react";
import Notes from "../Utility/Notes";
import Add from "../Utility/Add";
import Navbar from "../Utility/Navbar";
import logo from "./../../assets/icon/note.png";
import addIcon from "./../../assets/icon/add.png";
import Note from "../Utility/Note";

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
  const noteURL = "/my-notes/note";
  const deleteURL = "Notes/DeleteNote";
  const homeUrl = "/my-notes";
  const addNote = "/my-notes/add";
  const addAPI = "Notes/AddNote";

  return (
    <div className="w-full">
      <div className="sticky top-0">
        <Navbar header={header} />
      </div>
      <div className="flex flex-wrap justify-center w-full ">
        <Routes>
          <Route
            path="/"
            element={<Notes notesURL={notesURL} noteURL={noteURL} />}
          />
          <Route
            path="/add"
            element={<Add addAPI={addAPI} homeURL={homeUrl} />}
          />
          <Route
            path="/note"
            element={
              <Note deleteURL={deleteURL} homeURL={homeUrl} addNote={addNote} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
