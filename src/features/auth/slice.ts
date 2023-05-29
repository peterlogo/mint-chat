import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { loginUser, registerUser, logoutUser } from "./thunks";
import { LoadingState } from "../../types";

interface AuthState {
  user: string | null;
  loading: LoadingState;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: "idle",
  error: null,
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
    builder.addCase(registerUser.rejected, (state, action: any) => {
      state.loading = "failed";
      state.error = action.payload?.errorMessage;
    });

    // Login
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(loginUser.rejected, (state, action: any) => {
      state.loading = "failed";
      state.error = action.payload?.errorMessage;
    });

    // Logout
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.loading = "succeeded";
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export const authReducer = authSlice.reducer;
