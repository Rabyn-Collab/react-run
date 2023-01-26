import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieSlice";
import menuSLice from './menuSlice';





export const store = configureStore({
  reducer: {
    menu: menuSLice.reducer,
    [movieSlice.reducerPath]: movieSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      movieSlice.middleware
    ]),
});
