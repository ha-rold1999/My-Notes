// eslint-disable-next-line react/prop-types
export default function Title({ setTitle, title }) {
  return (
    <div className="my-3 ">
      <h1 className="text-xl font-semibold text-white">Title</h1>
      <input
        className="w-full p-2 text-white focus:outline-none focus:border-transparent rounded-lg"
        style={{ backgroundColor: "#706C61" }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
    </div>
  );
}
