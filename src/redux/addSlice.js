import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "type",
  initialState: [1],
  reducers: {
    addType(state, action) {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = addSlice;
export const { addType } = actions;
export default reducer;
