import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LogOutUser = createAsyncThunk("user/logout" , async () => {

    const Result = await axios.get('http://localhost:3001/auth/logout')

    console.log(Result);

    if(Result) {
        return true
    }else{
        return false
    }

})

