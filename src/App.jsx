import Notes from "./Components/Notes";
import Add from "./Components/Add";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-full">
        <div className="sticky top-0">
          <Header />
        </div>
        <div className="flex flex-wrap justify-center w-full ">
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
