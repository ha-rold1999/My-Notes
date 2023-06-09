import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { newDataTrigger } from "../../Redux/updateSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Delete } from "./call";
import { deleteNote } from "./Modals";

export default function Note({ deleteURL, homeURL, addNote }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const data = location.state;

  return (
    <div className="w-1/2 mt-2">
      <div
        className="w-full h-52  flex justify-center rounded-lg"
        style={{ backgroundColor: "#706C61" }}>
        <img src={data.url} className="w-fit h-full rounded-lg" />
      </div>
      <div className="text-white text-4xl font-bold whitespace-normal">
        {data.title}
      </div>
      <div
        className="text-white text-2xl whitespace-normal my-3"
        style={{ whiteSpace: "pre-wrap" }}>
        {data.description}
      </div>
      {data.items.map((step, index) => {
        return (
          <div key={index} className="my-3">
            <div className="text-white font-bold">Step {index + 1}</div>
            <div
              className="w-full p-2 rounded-lg"
              style={{ backgroundColor: "#706C61", whiteSpace: "pre-wrap" }}>
              <div style={{ color: "white" }}>{step}</div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-end my-3 flex-row">
        <div
          className="text-red-500  border-2 border-red-500 px-5 hover:text-white 
          hover:bg-red-500 mr-5 cursor-pointer"
          onClick={() => {
            deleteNote(deleteURL, data.id, navigate, homeURL);
            dispatch(newDataTrigger(true));
          }}>
          Delete
        </div>
        <Link
          to={`${addNote}`}
          state={data}
          className="text-white px-5"
          style={{ backgroundColor: "#706C61" }}>
          Update
        </Link>
      </div>
    </div>
  );
}
