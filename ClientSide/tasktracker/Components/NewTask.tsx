import axios from "axios";
import { useState } from "react";
interface state {
  title: string;
  description: string;
  status: string;
  image: any;
}
const NewTask = (props: { showModalfn: any }) => {
  const task: state = {
    title: "",
    description: "",
    status: "",
    image: "",
  };
  const [taskdata, setTaskData] = useState<state>(task);
  const handleInputChange = (name: string, value: any) => {
    setTaskData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitTask = () => {
    axios.post("http://localhost:3001/addTask",{
      Task:{
        title: taskdata.title,
        description: taskdata.description,
        status: taskdata.status
      }
    },{ withCredentials: true }).then((res)=>{
setTaskData(task)
    })
  };
  return (
    <div
      v-if="newMessageOpen"
      id="NewMessageSection"
      className="
          w-2/5
          absolute 
          bottom-0 
          right-0 
          mr-20 
          rounded-t-lg 
        bg-slate-700
         z-20
         shadow-lg
         shadow-yellow-300
        "
    >
      <div className="flex items-center justify-between rounded-t-lg w-full text-sm px-3.5 py-2.5 bg-pink-500">
        <div>New Task</div>
        <div onClick={props.showModalfn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-yellow-300 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <div>
        <div className="relative flex items-center pt-5  justify-around px-3.5 py-2">
          <div className="text-sm text-slate-200 font-semibold w-1/4">
            Title:
          </div>
          <input
            v-model="title"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            value={taskdata.title}
            name="title"
            className="w-full h-6 border-transparent border-none focus:ring-0 outline-none bg-slate-100 text-slate-900 rounded-sm"
            type="text"
          />
        </div>
      </div>

      <div className="m-1">
        <div className="text-left text-slate-100">Description:</div>
        <textarea
          v-model="body"
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          value={taskdata.description}
          style={{ resize: "none" }}
          name="description"
          maxLength={399}
          className="
              w-full 
              border-transparent 
              border-none 
              focus:ring-0 
              outline-none
              placeholder:text-center
              rounded-sm
              mt-3
              h-52
              text-slate-900
            "
          placeholder="Enter A description"
          rows={14}
        ></textarea>
      </div>

      <div className="relative w-full mb-3">
        <p className="text-slate-100 text-xs font-bold mb-2 text-center">
          Status:
        </p>

        <div className="flex justify-center items-center gap-4">
          <div className="mb-[0.125rem] inline-block  min-h-[1.5rem] pl-[1.5rem]">
            <input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              value="Not Started"
              className="relative float-left checked:bg-pink-500 bg-slate-100 -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="status"
              id="radioDefault03"
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer  text-slate-100 text-xs font-bold mb-2"
              htmlFor="radioDefault03"
            >
              Not Started
            </label>
          </div>

          <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem] mr-3">
            <input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              value="Inprogress"
              className="relative float-left checked:bg-pink-500 bg-slate-100 -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="status"
              id="radioDefault01"
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer  text-slate-100 text-xs font-bold mb-2"
              htmlFor="radioDefault01"
            >
              Inprogress
            </label>
          </div>

          <div className="mb-[0.125rem] inline-block  min-h-[1.5rem] pl-[1.5rem]">
            <input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              value="Completed"
              className="relative float-left checked:bg-pink-500 bg-slate-100 -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="status"
              id="radioDefault02"
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer  text-slate-100 text-xs font-bold mb-2"
              htmlFor="radioDefault02"
            >
              Completed
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-row justify-center">
        <div className=" bg-pink-500 relative  mt-4 mb-4">
          <button className="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 w-full inline-flex items-center">
            <svg
              fill="#FFF"
              height="18"
              viewBox="0 0 24 24"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
            </svg>
            <span className="ml-2">Upload Task Image</span>
            <input
              className="cursor-pointer absolute block opacity-0 pin-r pin-t"
              type="file"
              name="vacancyImageFiles"
            />
          </button>
        </div>
      </div>

      <div className="p-4 mt-1">
        <button
          onClick={submitTask}
          className="
              bg-pink-500 
              hover:bg-pink-600 
              text-yellow-300 
              text-sm 
              font-bold 
              py-2 
              px-4 
              rounded-full
            "
        >
          Submit Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
