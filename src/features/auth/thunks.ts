import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "../../services";
import { AuthParam } from "../../types";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: AuthParam, thunkAPI) => {
    const { email, password } = data;
    try {
      const user = await register({ email, password });
      console.log("User:", user);
      return user;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue({ errorCode, errorMessage });
    }
  }
);
