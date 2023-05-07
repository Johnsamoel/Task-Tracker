import { userData } from "@/models/userModel";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../middlewares/getUserInfoMiddleware";
interface state {
  Success: boolean;
  userInfo: userData;
  errorMessage:string
}

const initialState: state = {
  Success: false,
  userInfo:typeof window !== 'undefined'&& localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo") as string):{ _id: "", name: "", age: 0, email: "", role: "" },
  errorMessage:""
};
const authSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.Success = true;
        state.userInfo = action.payload;
      }
    ).addCase(loginUser.rejected,
      (state, action: PayloadAction<any>) => {
        console.log(action,"actionn")
        state.Success = false;
        state.errorMessage = "Invalid Credintials";
      })
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
