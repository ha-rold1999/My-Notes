import { Provider } from "react-redux";
import store from "./Redux/store";
import MyNotes from "./Components/MyNotes/MyNotes";
import { Router } from "react-router-dom";
import MenuRoute from "./Components/Main/MenuRoute";

function App() {
  return (
    <Provider store={store}>
      <MenuRoute/>
    </Provider>
  );
}

export default App;
