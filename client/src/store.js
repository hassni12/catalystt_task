import { configureStore } from "@reduxjs/toolkit";

import  productReducer  from "./Reducers/product";

export const store = configureStore({
  reducer: {
    productReducer
  },
});
