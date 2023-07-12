import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Card({ arr, noteURL }) {
  return (
    <Link
      to={`${noteURL}`}
      state={arr}
      className=" bg-white h-60 w-80 m-2 rounded-xl">
      <div className=" h-3/4 rounded-t-xl flex justify-center">
        <img src={arr.url} className="rounded-t-xl h-full " />
      </div>
      <div
        className="bg-blue-500 h-1/4 rounded-b-xl flex items-center px-2 "
        style={{ backgroundColor: "#706C61" }}>
        <h1 className="text-base truncate" style={{ color: "#FFFFFF" }}>
          {arr.title}
        </h1>
      </div>
    </Link>
  );
}
Card.propTypes = { arr: PropTypes.array.isRequired };
