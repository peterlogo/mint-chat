import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features";

/**
 * Redux store configuration
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
