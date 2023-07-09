import { useEffect, useState } from "react";
import Code from "./Code";
import { useSelector } from "react-redux";
import { newDataTrigger } from "../../Redux/updateSlice";
import { useDispatch } from "react-redux";
import {API_URL} from "../../../environment"

export default function Codes() {
    const dispatch = useDispatch();
    const [note, setNotes] = useState([]);
    const { search } = useSelector((state) => state.searchSlice);
    const { newData } = useSelector((state) => state.updateSlice);
  
    useEffect(() => {
      fetch(`${API_URL}/api/Codes/GetAllCodes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setNotes(res);
          console.log(JSON.stringify(code, null, 2))
          dispatch(newDataTrigger(false));
        });
    }, [newData, dispatch]);
  
    const filteredData =
      note?.data?.filter((arr) => {
        return arr.name.toLowerCase().includes(search.toLowerCase());
      }) || [];
  
    return (
      <div className="grid grid-cols-4 2xl:grid-cols-5">
        {filteredData.map((arr, index) => {
          return <Code key={index} arr={arr} />;
        })}
      </div>
    );
}
