import { createSlice } from "@reduxjs/toolkit";

var typeStorage = JSON.parse(localStorage.getItem("typeStorage"));
const addTypeSlice = createSlice({
  name: "type",
  initialState: [typeStorage ?? 1],
  reducers: {
    addType(state, action) {
      state.push(action.payload);
      localStorage.setItem("typeStorage", JSON.stringify(action.payload));
    },
  },
});

const { actions, reducer } = addTypeSlice;
export const { addType } = actions;
export default reducer;
