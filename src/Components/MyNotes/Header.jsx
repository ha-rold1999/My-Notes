import note from "./../../assets/icon/note.png";
import addnote from "./../../assets/icon/add.png";
import notebook from "./../../assets/icon/notebook.png"
import { Link } from "react-router-dom";
import { setSearch } from "../../Redux/searchSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full p-1  rounded-b-lg flex flex-row "
      style={{ backgroundColor: "#706C61" }}
    >
      <Link
        to="/my-notes"
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
      <div className=" basis-1/4 flex justify-center items-center space-x-5">
        <Link to="/" >
          <div className="  flex justify-center items-center flex-row ">
            <div className="text-white">Home</div>
            <img src={notebook} className="w-10 h-10 p-1" />
          </div>
        </Link>
        <Link to="/my-notes/add" >
          <div className="  flex justify-center items-center flex-row ">
            <div className="text-white">Add new note</div>
            <img src={addnote} className="w-10 h-10 p-1" />
          </div>
        </Link>
      </div>
      
    </div>
  );
}
