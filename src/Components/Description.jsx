// eslint-disable-next-line react/prop-types
export default function Description({ setDescription, description }) {
  return (
    <div className="my-3 ">
      <h1 className="text-xl font-semibold text-white">Description</h1>
      <textarea
        className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
        style={{ backgroundColor: "#706C61" }}
        rows={4}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
    </div>
  );
}
