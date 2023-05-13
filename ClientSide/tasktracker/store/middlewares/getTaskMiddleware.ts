import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetTaskInfo = createAsyncThunk('Tasks/getTask' , async( id:string, thunkAPI ) => {

    const result = await axios.get(`http://localhost:3001/GetTask/${id}`)

        console.log(result , 'fetching task  result')

        if(!result){
            return 'not foudn'
        }
    
        return result.data
})

export default GetTaskInfo;