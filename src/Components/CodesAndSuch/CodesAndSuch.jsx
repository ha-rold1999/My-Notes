import { Routes, Route } from "react-router-dom";
import Add from "../Utility/Add";
import Navbar from "../Utility/Navbar";
import coding from "./../../assets/icon/coding.png";
import newCode from "./../../assets/icon/branch.png";
import Notes from "../Utility/Notes";
import Note from "../Utility/Note";

export default function CodesAndSuch() {
  const header = {
    home: "/codes-and-such",
    pageName: "Codes and Such",
    logo: coding,
    add: "/codes-and-such/add",
    addName: "Add new Code",
    addLogo: newCode,
  };

  const notesURL = "Codes/GetAllCodes";
  const noteURL = "/codes-and-such/code";
  const deleteURL = "Codes/DeleteCode";
  const homeUrl = "/codes-and-such";
  const addNote = "/codes-and-such/add";
  const addAPI = "Codes/AddCode";
  const updateAPI = "Codes/UpdateCode";

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
            path="/code"
            element={
              <Note deleteURL={deleteURL} homeURL={homeUrl} addNote={addNote} />
            }
          />
          <Route
            path="/add"
            element={
              <Add addAPI={addAPI} updateAPI={updateAPI} homeURL={homeUrl} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
