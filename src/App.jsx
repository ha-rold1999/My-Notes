import { Provider } from "react-redux";
import store from "./Redux/store";
import MyNotes from "./Components/MyNotes/MyNotes";

function App() {
  return (
    <Provider store={store}>
      <MyNotes/>
    </Provider>
  );
}

export default App;
