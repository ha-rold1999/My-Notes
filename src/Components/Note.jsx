import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { newDataTrigger } from "../Redux/updateSlice";
import { useDispatch } from "react-redux";

export default function Note() {
  const dispatch = useDispatch();

  const location = useLocation();
  const data = location.state;

  const deleteNote = (id) => {
    fetch(`http://localhost:5019/api/Notes/DeleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((res) => console.log(JSON.stringify(res, null, 2)));
  };

  return (
    <div className="w-1/2 mt-2">
      <div
        className="w-full h-52  flex justify-center rounded-lg"
        style={{ backgroundColor: "#706C61" }}
      >
        <img src={data.url} className="w-fit h-full rounded-lg" />
      </div>
      <div className="text-white text-4xl font-bold whitespace-normal">
        {data.title}
      </div>
      <div
        className="text-white text-2xl whitespace-normal my-3"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {data.description}
      </div>
      {data.steps.map((step, index) => {
        return (
          <div key={index} className="my-3">
            <div className="text-white font-bold">Step {index + 1}</div>
            <div
              className="w-full p-2 rounded-lg"
              style={{ backgroundColor: "#706C61", whiteSpace: "pre-wrap" }}
            >
              <div style={{ color: "white" }}>{step}</div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-end my-3 flex-row">
        <Link
          to="/"
          className="text-red-500  border-2 border-red-500 px-5 hover:text-white hover:bg-red-500 mr-5"
          onClick={() => {
            deleteNote(data.id);
            dispatch(newDataTrigger(true));
          }}
        >
          Delete
        </Link>
        <Link
          to="/add"
          state={data}
          className="text-white px-5"
          style={{ backgroundColor: "#706C61" }}
        >
          Update
        </Link>
      </div>
    </div>
  );
}
