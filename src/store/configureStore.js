import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import reducer from "./reducer";
import errorLogger from "./middleware/errorLogger";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), errorLogger],
  });
}
