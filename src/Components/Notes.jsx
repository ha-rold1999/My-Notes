import { useState, useEffect } from "react";
import Card from "./Card";

export default function Notes() {
  const [note, setNotes] = useState([]);

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
  }, []);

  return (
    <div className="grid grid-cols-4">
      {note &&
        note.data &&
        note.data.map((arr, index) => {
          return <Card key={index} arr={arr} />;
        })}
    </div>
  );
}
