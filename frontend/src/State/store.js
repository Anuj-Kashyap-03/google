import { configureStore } from "@reduxjs/toolkit";
import {SearchReducer} from "./Reducers/SearchReducer.js";

export default configureStore({
  reducer: {
    Search: SearchReducer,
  },
});
