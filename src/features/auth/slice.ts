import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { loginUser, registerUser } from "./thunks";
import { LoadingState } from "../../types";

interface AuthState {
  user: User | null;
  loading: LoadingState;
}

const initialState: AuthState = {
  user: null,
  loading: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.loading = "failed";
    });

    // Login
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = "failed";
    });

    // Logout
    builder.addCase(loginUser.fulfilled, (state) => {
      state.user = null;
      state.loading = "succeeded";
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export const authReducer = authSlice.reducer;
