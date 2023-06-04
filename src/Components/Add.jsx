import { useState } from "react";
import { useLocation } from "react-router-dom";
import Title from "./Title";
import Description from "./Description";
import Step from "./Step";
import StepCounter from "./StepCounter";
import Thumbnail from "./Thumbnail";
import Submit from "./Submit";

export default function Add() {
  const location = useLocation();
  const data = location.state;

  console.log(JSON.stringify(data, null, 2));

  const [stepCounter, setStepCounter] = useState(data ? data.steps.length : 1);

  const [id] = useState(data && data.id);
  const [title, setTitle] = useState(data ? data.title : "");
  const [description, setDescription] = useState(data ? data.description : "");
  const [steps, setSteps] = useState(
    data ? data.steps : Array(stepCounter).fill("")
  );
  const [imageURL, setImageURL] = useState(data ? data.url : "");

  const handleStepValues = (index, value) => {
    const newStepValue = [...steps];
    newStepValue[index] = value;
    setSteps(newStepValue);
  };

  return (
    <div className="w-1/2  flex justify-center flex-col">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-white">
          {data ? "Update Note" : "Add New Note"}
        </h1>
      </div>
      <Title setTitle={setTitle} title={title} />
      <Description setDescription={setDescription} description={description} />
      {Array.from({ length: stepCounter }, (_, index) => {
        return (
          <Step
            key={index}
            handleStepValues={handleStepValues}
            index={index}
            steps={steps[index]}
          />
        );
      })}
      <StepCounter
        stepCounter={stepCounter}
        setSteps={setSteps}
        setStepCounter={setStepCounter}
        steps={steps}
      />
      <Thumbnail setImageURL={setImageURL} imageURL={imageURL} />
      <Submit
        id={id}
        title={title}
        description={description}
        steps={steps}
        imageURL={imageURL}
      />
    </div>
  );
}
