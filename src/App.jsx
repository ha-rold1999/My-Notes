import Card from "./Components/Card";
import Header from "./Components/Header";

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
    <div className="w-full">
      <Header />
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
