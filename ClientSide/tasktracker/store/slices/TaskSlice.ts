import { TaskModel } from "@/models/taskModel";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import GetTaskInfo from "../middlewares/getTaskMiddleware";

interface state {
  Success: boolean;
  TaskInfo: TaskModel | null;
  errorMessage: string;
}

const initialState: state = {
  Success: false,
  TaskInfo: { _id: "",  title: "" , description: "" , image: "" , creationDate: "" , status: ""},
  errorMessage:""
};
const TaskSlice = createSlice({
  name: "TaskData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetTaskInfo.fulfilled, (state , action:PayloadAction<any> ) => {

    })

}


});

export const taskActions = TaskSlice.actions;
export default TaskSlice.reducer;
