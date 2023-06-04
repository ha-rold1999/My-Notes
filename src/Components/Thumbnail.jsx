// eslint-disable-next-line react/prop-types
export default function Thumbnail({ setImageURL, imageURL }) {
  return (
    <>
      <div className="my-3 ">
        <h1 className="text-xl font-semibold text-white">Thumbnail</h1>
        <input
          className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
          style={{ backgroundColor: "#706C61" }}
          placeholder="Link of the image"
          onChange={(text) => {
            setImageURL(text.target.value);
          }}
          value={imageURL}
        />
      </div>
      <div className="w-full h-full bg-white my-3">
        <img src={imageURL} className="w-full h-full" />
      </div>
    </>
  );
}
