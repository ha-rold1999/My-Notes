import save from "./../assets/icon/save.png";

export default function Submit() {
  return (
    <button
      type="submit"
      className="w-full flex justify-center bg-white py-2 rounded-lg items-center"
    >
      <h1 className="text-2xl font-bold">Save Note</h1>
      <img src={save} className="w-10 h-10 m-2" />
    </button>
  );
}
