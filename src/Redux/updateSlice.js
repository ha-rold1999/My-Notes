import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
  name: "update",
  initialState: { newData: true },
  reducers: {
    newDataTrigger: (state, action) => {
      state.newData = action.payload;
    },
  },
});

export const { newDataTrigger } = updateSlice.actions;
export const updateReducer = updateSlice.reducer;
