import PropTypes from "prop-types";

export default function Thumbnail({ register, errors, watch }) {
  Thumbnail.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.func.isRequired,
    watch: PropTypes.func.isRequired,
  };
  return (
    <>
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
    </>
  );
}
