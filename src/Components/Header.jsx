import note from "./../assets/icon/notes.png";
import addnote from "./../assets/icon/add.png";
import { Link } from "react-router-dom";
import { setSearch } from "../Redux/searchSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full p-1  rounded-b-lg flex flex-row "
      style={{ backgroundColor: "#706C61" }}
    >
      <Link
        to="/"
        className="basis-1/4 flex flex-row items-center justify-center"
      >
        <h1 className="font-bold text-3xl" style={{ color: "#FFFFFF" }}>
          My Notes
        </h1>
        <img src={note} className="w-10 h-10 ml-1" />
      </Link>

      <div className="basis-1/2  rounded-lg">
        <input
          className="h-full w-full rounded-lg px-2 text-white focus:outline-none focus:border-transparent"
          style={{ backgroundColor: "#333333" }}
          placeholder="Search a note"
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
        />
      </div>
      <Link to="/add" className=" basis-1/4 flex justify-center items-center">
        <div className="  flex justify-center items-center flex-row ">
          <div className="text-white">Add new note</div>
          <img src={addnote} className="w-10 h-10 p-1" />
        </div>
      </Link>
    </div>
  );
}
