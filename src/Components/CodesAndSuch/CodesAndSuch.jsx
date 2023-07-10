import Codes from "./Codes";
import Code from "./Code";
import { Routes, Route } from "react-router-dom";
import Add from "./Add";
import Navbar from "../Utility/Navbar";
import coding from "./../../assets/icon/coding.png";
import newCode from "./../../assets/icon/branch.png";
import Notes from "../Utility/Notes";

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

  return (
    <div className="w-full">
      <div className="sticky top-0">
        <Navbar header={header} />
      </div>
      <div className="flex flex-wrap justify-center w-full ">
        <Routes>
          <Route path="/" element={<Notes notesURL={notesURL} />} />
          {/* <Route path="/add" element={<Add />} />
          <Route path="/note" element={<Note />} /> */}
          <Route path="/code" element={<Code />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </div>
  );
}
