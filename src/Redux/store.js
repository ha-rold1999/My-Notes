import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./searchSlice";
import { updateReducer } from "./updateSlice";

export default configureStore({
  reducer: {
    searchSlice: searchReducer,
    updateSlice: updateReducer,
  },
});
