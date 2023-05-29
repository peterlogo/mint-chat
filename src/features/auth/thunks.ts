import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, login, logOut } from "../../services";
import { AuthParam } from "../../types";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: AuthParam, thunkAPI) => {
    const { email, password } = data;
    try {
      const user = await register({ email, password });
      return user.uid;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue({ errorCode, errorMessage });
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: AuthParam, thunkAPI) => {
    const { email, password } = data;
    try {
      const user = await login({ email, password });
      return user.uid;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue({ errorCode, errorMessage });
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await logOut();
      return;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue({ errorCode, errorMessage });
    }
  }
);
