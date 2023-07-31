import { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { newDataTrigger } from "../../Redux/updateSlice";
import { useDispatch } from "react-redux";
import { API_URL } from "../../../environment";
import { Get } from "./call";
import Swal from "sweetalert2";

export default function Notes({ notesURL, noteURL }) {
  const dispatch = useDispatch();
  const [note, setNotes] = useState([]);
  const { search } = useSelector((state) => state.searchSlice);
  const { newData } = useSelector((state) => state.updateSlice);

  useEffect(() => {
    async function fetchData() {
      try {
        const notes = await Get(notesURL);
        setNotes(notes);
        dispatch(newDataTrigger(false));
        Swal.close();
      } catch (error) {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    }

    Swal.showLoading();
    fetchData();
  }, [newData, dispatch]);

  const filteredData =
    note?.data?.filter((arr) => {
      return arr.title.toLowerCase().includes(search.toLowerCase());
    }) || [];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 ">
      {filteredData.map((arr, index) => {
        return <Card key={index} arr={arr} noteURL={noteURL} />;
      })}
    </div>
  );
}
