import PropTypes from "prop-types";
import handleTab from "./indexing";

// eslint-disable-next-line react/prop-types
export default function Step({ index, register, errors }) {
  Step.propTypes = {
    index: PropTypes.number.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      step: PropTypes.shape({ message: PropTypes.string }),
    }),
  };
  return (
    <div className="my-3 " key={index}>
      <h1 className="text-xl font-semibold text-white">Step {index + 1}</h1>
      <textarea
        className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
        style={{ backgroundColor: "#706C61" }}
        rows={2}
        {...register(`items.${index}`)}
        onKeyDown={handleTab}
        placeholder="Your Step"
      />
      <span className="text-red-600">{errors.items?.message}</span>
    </div>
  );
}
