import React from "react";
import notebook from "./../../assets/icon/notebook.png";
import { Link } from "react-router-dom";
import { setSearch } from "../../Redux/searchSlice";
import { useDispatch } from "react-redux";

export default function Navbar({ header }) {
  const dispatch = useDispatch();

  const { home, pageName, logo, add, addName, addLogo } = header;

  return (
    <div
      className="w-full p-1  rounded-b-lg flex flex-row "
      style={{ backgroundColor: "#706C61" }}>
      <Link
        to={`${home}`}
        className="basis-1/4 flex flex-row items-center justify-center">
        <h1 className="font-bold text-3xl" style={{ color: "#FFFFFF" }}>
          {pageName}
        </h1>
        <img src={logo} className="w-10 h-10 ml-1" />
      </Link>

      <div className="basis-1/2  rounded-lg">
        <input
          className="h-full w-full rounded-lg px-2 text-white focus:outline-none focus:border-transparent"
          style={{ backgroundColor: "#333333" }}
          placeholder="Search a code"
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
        />
      </div>
      <div className=" basis-1/4 flex justify-center items-center space-x-5">
        <Link to="/">
          <div className="  flex justify-center items-center flex-row ">
            <div className="text-white">Notebook</div>
            <img src={notebook} className="w-10 h-10 p-1" />
          </div>
        </Link>
        <Link to={`${add}`}>
          <div className="  flex justify-center items-center flex-row ">
            <div className="text-white">{addName}</div>
            <img src={addLogo} className="w-10 h-10 p-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
