import { useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Title from "./Title";
import Description from "./Description";
import Step from "./Step";
import StepCounter from "./StepCounter";
import Thumbnail from "./Thumbnail";
import Submit from "./Submit";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newDataTrigger } from "../Redux/updateSlice";

import { Put, Post } from "./call";

export default function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

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
      step: data ? data.steps : [""],
      title: data ? data.title : "",
      description: data ? data.description : "",
      thumbnail: data ? data.url : "",
    },
  });
  const { fields, append, remove } = useFieldArray({ name: "step", control });

  const onSubmit = (input) => {
    if (data) {
      const res = Put(data, input);
      if (res === 200) {
        dispatch(newDataTrigger(true));
        navigate("/");
      }
    } else {
      const res = Post(input);
      if (res === 200) {
        dispatch(newDataTrigger(true));
        navigate("/");
      }
    }
  };

  return (
    <div className="w-1/2  flex justify-center flex-col">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-white">
          {data ? "Update Note" : "Add New Note"}
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <Title register={register} errors={errors} />

        {/* Description */}
        <Description register={register} errors={errors} />

        <h1 className="text-xl font-semibold text-white">Steps</h1>
        {/* Steps */}
        {fields.map((field, index) => {
          return (
            <Step
              key={index}
              index={index}
              register={register}
              errors={errors}
            />
          );
        })}

        {/* Add and Substract Steps*/}
        <StepCounter remove={remove} append={append} fields={fields} />

        {/* Thumbnail */}
        <Thumbnail register={register} errors={errors} watch={watch} />

        {/* Submit */}
        <Submit />
      </form>
    </div>
  );
}
