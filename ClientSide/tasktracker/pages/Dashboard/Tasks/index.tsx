import AddIcon from "@/Components/AddIcon";
import BarChart from "@/Components/BarChart";
import Pagination from "@/Components/Pagination";
import Sidebar from "@/Components/Sidebar";
import TaskCard from "@/Components/TaskCard";
import NewTask from "@/Components/NewTask";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { convertToTaskModel } from "@/dataConverters.ts/taskConverter";
import axios from "axios";
import { TaskModel } from "@/models/taskModel";
const fetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then((res) => {
    let tasks = convertToTaskModel(res.data.tasks);
    return {
      tasks: tasks,
      totalPages: res.data.totalPages,
    };
  });
const DashboardTasks = () => {
  const [showModal, setshowModal] = useState(false);
  const store: any = useSelector((state) => state);
  const { data, error } = useSWR(
    store.userAuthentication? `http://localhost:3001/userTasks/${store.userAuthentication.userInfo._id}?pageNumber=1`:null,
    fetcher,
    {refreshInterval:1000, revalidateOnReconnect:true}
  );

  console.log(data, "data");
  return (
    <div className="bg-slate-100 h-screen">
    <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100  h-full">
      {/* Header */}
      <div className="relative bg-slate-900  pt-10 h-full">
        <div className="px-4 md:px-10 mx-auto w-full h-full flex gap-5 flex-col">
          <p className=" font-bold text-left text-pink-500 pl-5 text-xl">Your Tasks</p>
          <div className="flex flex-wrap gap-5 justify-center items-center"         style={{
        backgroundImage: "url(" + "/register_bg_2.png" + ")",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        
      }}>
            {/* Card stats */}
            {data &&
              data.tasks.length !== 0&&
              data.tasks.map((task: TaskModel) => {
                return (
                  <TaskCard
                    key={task._id}
                    Title={task.title}
                    description={task.description}
                    TaskDate={new Date(task.creationDate).toDateString()}
                    status={task.status}
                  />
                );
              })}
              
          </div>
          <div className="flex justify-end items-center w-full">
        { !showModal && <AddIcon ClickFn={() => { setshowModal(true) }}/>} 
           { showModal && <NewTask showModalfn={() => { setshowModal(false) }} />}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DashboardTasks;
