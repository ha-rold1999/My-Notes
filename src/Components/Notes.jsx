import { useState, useEffect } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

export default function Notes() {
  const [note, setNotes] = useState([]);
  const { search } = useSelector((state) => state.searchSlice);

  useEffect(() => {
    fetch("http://localhost:5019/api/Notes/GetAllNotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setNotes(res);
      });
  }, [note]);

  const filteredData =
    note?.data?.filter((arr) => {
      return arr.title.toLowerCase().includes(search.toLowerCase());
    }) || [];

  return (
    <div className="grid grid-cols-4">
      {filteredData.map((arr, index) => {
        return <Card key={index} arr={arr} />;
      })}
    </div>
  );
}
