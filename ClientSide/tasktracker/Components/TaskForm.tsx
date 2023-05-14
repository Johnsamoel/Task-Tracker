import Image from "next/image";
import { useState, useEffect } from "react";
import { TaskModel } from "@/models/taskModel";
import { TaskSchema } from "@/utils/validationTask";
import axios from "axios";

const TaskForm = ({
  title,
  description,
  image,
  status,
  _id,
  creationDate,
}: TaskModel) => {
  const [TaskData, setTaskData] = useState({} as TaskModel);
  const [EditMode, setEditMode] = useState(false);
  
  const errorObj = {
    name: "",
    errorMessage: "",
  };

  const [error, setError] = useState(errorObj);


  const handleErrorObj = (name: string, errorMessage: string) => {
    setError((prevState) => ({
      ...prevState,
      name: name,
      errorMessage: errorMessage,
    }));
  };

  useEffect(() => {
    setTaskData({ title, description, image, status, _id, creationDate });
  }, [_id]);

  const handleTaskFormChange = (name: string, value: string) => {
    setTaskData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const StartEditMode = () => {
    setEditMode(true)
  } 



  const SubmitTaskForm = async() => {
    console.log('just a click')
    const TaskValuesObj = {
      id: TaskData._id,
      title: TaskData.title,
      description: TaskData.description,
      status: TaskData.status
    }
    const validationResult =  TaskSchema.validate(TaskValuesObj)
    console.log(validationResult.error)
    if(!validationResult.error) {
      console.log('no errors')
      handleErrorObj("" , "")


     const result = await axios.patch(`http://localhost:3001/editTask/${TaskData._id}` ,  { Task: TaskValuesObj } , {withCredentials:true})

     if(result) {
      console.log('done' , result)
      setEditMode(false)
     }
    } else {
      const key = validationResult.error.details[0].path[0] as string;
      const errorMessage = validationResult.error.message;
      handleErrorObj(key, errorMessage);
    }
  }

  return (
    <div className="bg-slate-500 rounded-lg flex justify-around items-center flex-col w-full ">
      <div className="justify-center w-full flex ">
        <Image
          src={"/man.png"}
          height={100}
          width={100}
          alt="Task Image"
          className=" relative -top-14"
        />
      </div>

      <div className="flex justify-start items-center  flex-col h-64 w-full ">
        <div className="flex justify-center items-center flex-col  w-full h-full">
          <div className="flex justify-around items-center w-full gap-1">
            <div className=" flex flex-col justify-start items-center w-2/5 h-40 max-h-56">
              <label
                htmlFor="title"
                className="text-slate-800 text-start w-full"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="h-10 border mt-1 rounded px-4 w-full text-slate-900 bg-gray-50 "
                value={TaskData.title}
                onChange={(e) => {
                  handleTaskFormChange(e.target.name, e.target.value);
                }}
                disabled={!EditMode}
              />
            </div>

            <div className="flex justify-start items-center flex-col w-2/5 h-40 max-h-56">
              <label htmlFor="description" className="text-slate-800 w-full">
                description
              </label>
              <textarea
                name="description"
                id="description"
                className="h-10 border mt-1 rounded px-1 w-full bg-gray-50 text-slate-900"
                placeholder=""
                value={TaskData.description}
                onChange={(e) => {
                  handleTaskFormChange(e.target.name, e.target.value);
                }}
                disabled={!EditMode}
              />
            </div>
          </div>

          <div className="flex items-center justify-start pl-10 w-full h-32 ">
            <label htmlFor="status" className="  text-slate-900">
              status
            </label>
            <select
              id="status"
              name="status"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              value={TaskData.status}
              onChange={(e) => {
                handleTaskFormChange(e.target.name, e.target.value);
              }}
              disabled={!EditMode}
            >
              <option value="Cancelled">Cancelled</option>
              <option value="Not Started">Not Started</option>
              <option value="Inprogress">In progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className=" text-right my-12">
            <div className="inline-flex items-end">
              {EditMode && (
                <button className="bg-pink-500 hover:bg-pink-700 text-yellow-300 shadow-md hover:shadow-yellow-300 shadow-pink-300 font-bold py-2 px-4 rounded"
                onClick={SubmitTaskForm}>
                  Submit
                </button>
              )}
              {!EditMode && (
                <button className="bg-pink-500 hover:bg-pink-700 text-yellow-300 shadow-md hover:shadow-yellow-300 shadow-pink-300 font-bold py-2 px-4 rounded"
                onClick={StartEditMode}>
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
