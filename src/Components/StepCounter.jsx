/* eslint-disable react/prop-types */
export default function StepCounter({
  stepCounter,
  setStepCounter,
  setSteps,
  steps,
}) {
  return (
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
  );
}
