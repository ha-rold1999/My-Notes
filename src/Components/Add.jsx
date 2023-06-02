import { useState } from "react";
import save from "./../assets/icon/save.png";

export default function Add() {
  const [stepCounter, setStepCounter] = useState(1);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState(Array(stepCounter).fill(""));
  const [imageURL, setImageURL] = useState("");

  const handleStepValues = (index, value) => {
    const newStepValue = [...steps];
    newStepValue[index] = value;
    setSteps(newStepValue);
  };

  return (
    <div className="w-1/2  flex justify-center flex-col">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-white">Add New Note</h1>
      </div>
      <div className="my-3 ">
        <h1 className="text-xl font-semibold text-white">Title</h1>
        <input
          className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
          style={{ backgroundColor: "#706C61" }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="my-3 ">
        <h1 className="text-xl font-semibold text-white">Description</h1>
        <textarea
          className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
          style={{ backgroundColor: "#706C61" }}
          rows={4}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      {Array.from({ length: stepCounter }, (_, index) => {
        return (
          <div className="my-3 " key={index}>
            <h1 className="text-xl font-semibold text-white">
              Step {index + 1}
            </h1>
            <textarea
              className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
              style={{ backgroundColor: "#706C61" }}
              rows={2}
              onChange={(text) => {
                handleStepValues(index, text.target.value);
              }}
            />
          </div>
        );
      })}
      <div className="flex justify-end m-3">
        {stepCounter && (
          <button
            className="mx-2 py-2 px-10 rounded-lg"
            style={{ backgroundColor: "#706C61" }}
            onClick={() => {
              setStepCounter(stepCounter - 1);
              const newStepValues = steps.slice(0, -1);
              setSteps(newStepValues);
            }}
          >
            Subtract Step
          </button>
        )}

        <button
          className="mx-2 py-2 px-10 rounded-lg"
          style={{ backgroundColor: "#E1F4F3" }}
          onClick={() => {
            setStepCounter(stepCounter + 1);
          }}
        >
          Add Step
        </button>
      </div>
      <div className="my-3 ">
        <h1 className="text-xl font-semibold text-white">Thumbnail</h1>
        <input
          className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
          style={{ backgroundColor: "#706C61" }}
          placeholder="Link of the image"
          onChange={(text) => {
            setImageURL(text.target.value);
          }}
        />
      </div>
      <div className="w-full h-full bg-white my-3">
        <img src={imageURL} className="w-full h-full" />
      </div>
      <div className="my-3">
        <button
          className="w-full flex justify-center bg-white py-2 rounded-lg items-center"
          onClick={() => {
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
              })
              .catch((res) => console.log(JSON.stringify(res, null, 2)));
          }}
        >
          <h1 className="text-2xl font-bold">Save Note</h1>
          <img src={save} className="w-10 h-10 m-2" />
        </button>
      </div>
    </div>
  );
}
