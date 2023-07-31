import PropTypes from "prop-types";
import handleTab from "./indexing";

// eslint-disable-next-line react/prop-types
export default function Description({ register, errors }) {
  Description.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      description: PropTypes.shape({ message: PropTypes.string }),
    }),
  };

  return (
    <div className="my-3 ">
      <h1 className="text-xl font-semibold text-white">Description</h1>
      <textarea
        className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
        style={{ backgroundColor: "#706C61" }}
        rows={4}
        {...register("description")}
        onKeyDown={handleTab}
      />
      <span className="text-red-600">{errors.description?.message}</span>
    </div>
  );
}
