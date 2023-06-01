import Card from "./Components/Card";

function App() {
  let myarr = [
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
    "Hello",
  ];

  return (
    <div className="w-full" style={{ backgroundColor: "#526D82" }}>
      <div
        className="w-full p-5  rounded-b-lg"
        style={{ backgroundColor: "#9DB2BF" }}
      >
        <h1 className="font-bold text-3xl">My Notes</h1>
      </div>
      <div className="flex flex-wrap justify-center w-full ">
        <div className="grid grid-cols-4">
          {myarr.map((arr, index) => {
            return <Card key={index} arr={arr} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
