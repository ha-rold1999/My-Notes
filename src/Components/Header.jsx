import note from "./../assets/icon/notes.png";
import addnote from "./../assets/icon/add.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      className="w-full p-1  rounded-b-lg flex flex-row "
      style={{ backgroundColor: "#706C61" }}
    >
      <Link to="/" className="basis-1/4 flex flex-row items-center">
        <h1 className="font-bold text-3xl" style={{ color: "#FFFFFF" }}>
          My Notes
        </h1>
        <img src={note} className="w-10 h-10 ml-1" />
      </Link>

      <div className="basis-1/2  rounded-lg">
        <input
          className="h-full w-3/4 rounded-lg px-2 text-white focus:outline-none focus:border-transparent"
          style={{ backgroundColor: "#333333" }}
        />

        <button
          className="w-1/4 h-full rounded-lg "
          style={{ backgroundColor: "#E1F4F3" }}
        >
          <h1>Search</h1>
        </button>
      </div>
      <div className="basis-1/4  flex justify-center items-center flex-row ">
        <Link to="/add"> Add new note</Link>
        <img src={addnote} className="w-10 h-10 p-1" />
      </div>
    </div>
  );
}
