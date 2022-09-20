import { configureStore } from "@reduxjs/toolkit";
import addSlice from "~/redux/addSlice";

const store = configureStore({
  reducer: {
    type: addSlice,
  },
});

export default store;
