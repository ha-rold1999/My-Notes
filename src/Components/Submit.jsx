import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newDataTrigger } from "../Redux/updateSlice";
import save from "./../assets/icon/save.png";

// eslint-disable-next-line react/prop-types
export default function Submit({ id, title, description, steps, imageURL }) {
  const dispatch = useDispatch();

  console.log(id, title, description, steps, imageURL);

  return (
    <div className="my-3">
      <Link
        to="/"
        className="w-full flex justify-center bg-white py-2 rounded-lg items-center"
        onClick={() => {
          if (id) {
            fetch("http://localhost:5019/api/Notes/UpdateNote", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                Id: id,
                Title: title,
                Description: description,
                steps: steps,
                url: imageURL,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                console.log(JSON.stringify(res, null, 2));
                dispatch(newDataTrigger(true));
              })
              .catch((res) => console.log(JSON.stringify(res, null, 2)));
          } else {
            fetch("http://localhost:5019/api/Notes/AddNote", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                Title: title,
                Description: description,
                steps: steps,
                url: imageURL,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                console.log(JSON.stringify(res, null, 2));
                dispatch(newDataTrigger(true));
              })
              .catch((res) => console.log(JSON.stringify(res, null, 2)));
          }
        }}
      >
        <h1 className="text-2xl font-bold">Save Note</h1>
        <img src={save} className="w-10 h-10 m-2" />
      </Link>
    </div>
  );
}
