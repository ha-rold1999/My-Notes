import Notes from "./Components/Notes";
import Add from "./Components/Add";
import Header from "./Components/Header";
import Note from "./Components/Note";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-wrap justify-center w-full ">
        <div className="grid grid-cols-4">
          {myarr.map((arr, index) => {
            return <Card key={index} arr={arr} />;
          })}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
