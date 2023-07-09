import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function Step({ index, register, errors }) {
  Step.propTypes = {
    inde: PropTypes.number.isRequired,
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
        {...register(`step.${index}`)}
        placeholder="Your Step"
      />
      <span className="text-red-600">{errors.step?.message}</span>
    </div>
  );
}
