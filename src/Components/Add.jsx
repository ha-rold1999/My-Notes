import { useState } from "react";
import save from "./../assets/icon/save.png";

export default function Add() {
  const [steps, setSteps] = useState(1);
  const [imageURL, setImageURL] = useState("");

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
        />
      </div>
      <div className="my-3 ">
        <h1 className="text-xl font-semibold text-white">Description</h1>
        <textarea
          className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
          style={{ backgroundColor: "#706C61" }}
          rows={4}
        />
      </div>
      {Array.from({ length: steps }, (_, index) => {
        return (
          <div className="my-3 " key={index}>
            <h1 className="text-xl font-semibold text-white">
              Step {index + 1}
            </h1>
            <textarea
              className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
              style={{ backgroundColor: "#706C61" }}
              rows={2}
            />
          </div>
        );
      })}
      <div className="flex justify-end m-3">
        {steps && (
          <button
            className="mx-2 py-2 px-10 rounded-lg"
            style={{ backgroundColor: "#706C61" }}
            onClick={() => {
              setSteps(steps - 1);
            }}
          >
            Subtract Step
          </button>
        )}

        <button
          className="mx-2 py-2 px-10 rounded-lg"
          style={{ backgroundColor: "#E1F4F3" }}
          onClick={() => {
            setSteps(steps + 1);
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
        <button className="w-full flex justify-center bg-white py-2 rounded-lg items-center">
          <h1 className="text-2xl font-bold">Save Note</h1>
          <img src={save} className="w-10 h-10 m-2" />
        </button>
      </div>
    </div>
  );
}
