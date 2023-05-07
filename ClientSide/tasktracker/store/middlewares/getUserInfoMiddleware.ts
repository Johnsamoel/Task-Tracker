import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// First, create the thunk
export const loginUser = createAsyncThunk(
  "user/login",
  async (state: any, thunkAPI) => {
    const response = await axios.post(
      "http://localhost:3001/auth/login",
      {
        password: state.password,
        email: state.email,
      },
      { withCredentials: true }
    );
    console.log(response, "message");
    if (response.status === 200) {
      localStorage.setItem("userInfo",JSON.stringify(response.data) )
      return response.data;
    } else {
      return response.data;
    }
  }
);
