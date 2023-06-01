import PropTypes from "prop-types";
import thumbnail from "./../../src/assets/thumbnail/hero.png";

export default function Card() {
  return (
    <div className=" bg-white h-60 w-80 m-2 rounded-xl">
      <div className=" h-3/4 rounded-t-xl">
        <img src={thumbnail} className="rounded-t-xl" />
      </div>
      <div
        className=" h-1/4 rounded-b-xl flex items-center px-2 "
        style={{ backgroundColor: "#706C61" }}
      >
        <h1 className="text-base truncate" style={{ color: "#FFFFFF" }}>
          Setting Up React+Vite+Tailwind
        </h1>
      </div>
    </div>
  );
}

Card.propTypes = { arr: PropTypes.array.isRequired };
