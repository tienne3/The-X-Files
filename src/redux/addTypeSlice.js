import { createSlice } from "@reduxjs/toolkit";

const addTypeSlice = createSlice({
  name: "type",
  initialState: [1],
  reducers: {
    addType(state, action) {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = addTypeSlice;
export const { addType } = actions;
export default reducer;
