import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { registerUser } from "./thunks";
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
  },
});

export const authReducer = authSlice.reducer;
