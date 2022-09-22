import { configureStore } from "@reduxjs/toolkit";
import addTypeSlice from "~/redux/addTypeSlice";

const store = configureStore({
  reducer: {
    type: addTypeSlice,
  },
});

export default store;
