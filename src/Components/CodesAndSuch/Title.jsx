import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function Title({ register, errors }) {
  Title.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      title: PropTypes.shape({ message: PropTypes.string }),
    }),
  };
  return (
    <div className="my-3 ">
      <h1 className="text-xl font-semibold text-white">Title</h1>
      <input
        className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
        style={{ backgroundColor: "#706C61" }}
        {...register("title")}
      />
      <span className="text-red-600">{errors.title?.message}</span>
    </div>
  );
}
