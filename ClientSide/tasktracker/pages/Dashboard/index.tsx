import BarChart from "@/Components/BarChart";
import Pagination from "@/Components/Pagination";
import Sidebar from "@/Components/Sidebar";
import TaskCard from "@/Components/TaskCard";
import axios from "axios";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import { convertToTaskModel } from "@/dataConverters/taskConverter";
import { TaskModel } from "@/models/taskModel";

const fetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then((res) => {
    let tasks = convertToTaskModel(res.data.tasks);
    return {
      tasks: tasks,
      totalPages: res.data.totalPages,
    };
  });

const Dashboard = (props: any) => {
  const store: any = useSelector((state) => state);
  const { data, error } = useSWR(
    `http://localhost:3001/userTasks/${store.userAuthentication.userInfo._id}?pageNumber=1`,
    fetcher
  );
  console.log(data, "data");

  return (
    <div className="bg-slate-100 h-screen">
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100  h-full">
        {/* Header */}
        <div className="relative bg-slate-900  pt-12 h-full">
          <div className="px-4 md:px-10 mx-auto w-full h-full flex gap-5 flex-col">
            <p className=" font-bold text-left text-pink-500 pl-5 text-xl">
              Your Tasks
            </p>
            <div className="flex flex-wrap gap-5 justify-center items-center ">
              {/* Card stats */}
              {data &&
                data.tasks.length !== 0 &&
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
            <div className="flex justify-center items-center">
              <Pagination
                destinationUrl="/"
                totalNumber={data ? data.totalPages : 1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
