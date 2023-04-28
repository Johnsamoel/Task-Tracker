import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "console";

// First, create the thunk
export const loginUser = createAsyncThunk(
  "user/login",
  async (state: any, thunkAPI) => {
    const response = await axios.post("http://localhost:3001/auth/login", {
      password: state.password,
      email: state.email,
    });
    console.log(response,"message")
    if (response.status === 200) {
      return response.data;
    }else{
      
      return response.data
    }
  }
);
