import PropTypes from "prop-types";

export default function StepCounter({ remove, fields, append }) {
  StepCounter.propTypes = {
    remove: PropTypes.func.isRequired,
    fields: PropTypes.array,
    append: PropTypes.func.isRequired,
  };
  return (
    <div className="flex justify-end m-3">
      <button
        type="button"
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
  );
}
