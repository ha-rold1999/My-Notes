// eslint-disable-next-line react/prop-types
export default function Step({ index, handleStepValues, steps }) {
  return (
    <div className="my-3 ">
      <h1 className="text-xl font-semibold text-white">Step {index + 1}</h1>
      <textarea
        className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
        style={{ backgroundColor: "#706C61" }}
        rows={2}
        onChange={(text) => {
          handleStepValues(index, text.target.value);
        }}
        value={steps}
      />
    </div>
  );
}
