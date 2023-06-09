import { useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import save from "./../assets/icon/save.png";
import * as yup from "yup";
// import Title from "./Title";
// import Description from "./Description";
// import Step from "./Step";
// import Thumbnail from "./Thumbnail";
// import Submit from "./Submit";
import { useFieldArray, useForm } from "react-hook-form";

export default function Add() {
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    thumbnail: yup.string().required("Thumbail is required"),
  });
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      step: ["First Step"],
      title: "",
      description: "",
      thumbnail: "",
    },
  });
  const { fields, append, remove } = useFieldArray({ name: "step", control });
  const onSubmit = (data) => {
    console.log(data);
  };

  const location = useLocation();
  const data = location.state;

  return (
    <div className="w-1/2  flex justify-center flex-col">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-white">
          {data ? "Update Note" : "Add New Note"}
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="my-3 ">
          <h1 className="text-xl font-semibold text-white">Title</h1>
          <input
            className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
            style={{ backgroundColor: "#706C61" }}
            {...register("title")}
          />
          <span className="text-red-600">{errors.title?.message}</span>
        </div>

        {/* Description */}
        <div className="my-3 ">
          <h1 className="text-xl font-semibold text-white">Description</h1>
          <textarea
            className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
            style={{ backgroundColor: "#706C61" }}
            rows={4}
            {...register("description")}
          />
          <span className="text-red-600">{errors.description?.message}</span>
        </div>

        <h1 className="text-xl font-semibold text-white">Steps</h1>
        {/* Steps */}
        {fields.map((field, index) => {
          return (
            <div className="my-3 " key={index}>
              <h1 className="text-xl font-semibold text-white">
                Step {index + 1}
              </h1>
              <textarea
                className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
                style={{ backgroundColor: "#706C61" }}
                rows={2}
                {...register(`step.${index}`)}
                placeholder="Your Step"
              />
              <span className="text-red-600">{errors.step?.message}</span>
            </div>
          );
        })}

        {/* Add and Substract Steps*/}
        <div className="flex justify-end m-3">
          <button
            className="mx-2 py-2 px-10 rounded-lg"
            style={{ backgroundColor: "#706C61" }}
            onClick={() => {
              remove(fields.length - 1);
            }}
          >
            Remove Step
          </button>
          <button
            className="mx-2 py-2 px-10 rounded-lg"
            style={{ backgroundColor: "#E1F4F3" }}
            type="button"
            onClick={() => {
              append("");
            }}
          >
            Add Step
          </button>
        </div>

        {/* Thumbnail */}
        <div className="my-3 ">
          <h1 className="text-xl font-semibold text-white">Thumbnail</h1>
          <input
            className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
            style={{ backgroundColor: "#706C61" }}
            placeholder="Link of the image"
            {...register("thumbnail")}
          />
          <span className="text-red-600">{errors.thumbnail?.message}</span>
        </div>
        <div className="w-full h-fit bg-white my-3">
          <img src={watch("thumbnail")} className="w-full h-fit" />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center bg-white py-2 rounded-lg items-center"
        >
          <h1 className="text-2xl font-bold">Save Note</h1>
          <img src={save} className="w-10 h-10 m-2" />
        </button>
        {/* <input
          type="submit"
          value="Add Note"
          className="w-full flex justify-center bg-white py-2 rounded-lg items-center"
        /> */}
      </form>
    </div>
  );
}
