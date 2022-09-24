import { createSlice } from "@reduxjs/toolkit";

const typeStg = JSON.parse(localStorage.getItem("typeStg"));
const addTypeSlice = createSlice({
  name: "type",
  initialState: [typeStg || 1],
  reducers: {
    addType(state, action) {
      state.push(action.payload);
      localStorage.setItem("typeStg", JSON.stringify(action.payload));
    },
  },
});

const { actions, reducer } = addTypeSlice;
export const { addType } = actions;
export default reducer;
