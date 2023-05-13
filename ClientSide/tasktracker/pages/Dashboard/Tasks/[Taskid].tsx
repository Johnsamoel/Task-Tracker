import Sidebar from "@/Components/Sidebar";
import TaskForm from "@/Components/TaskForm";
import { TaskModel } from "@/models/taskModel";
import GetTaskInfo from "@/store/middlewares/getTaskMiddleware";
import store from "@/store/store";
import { convertToTaskModel } from "@/dataConverters.ts/taskConverter";
import axios from "axios";
import { useRouter } from "next/router";
import { useState , useEffect} from "react";


interface Taskprops {

  task: TaskModel
 
}

const fetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then((res) => {
    return res.data
    
  });


const Task = ({task}:Taskprops) => {

  const [taskobj , setTaskobj] = useState({} as TaskModel);
  const router = useRouter()

  const {query} = router

   
    
  useEffect(() => {

    if(!query.Taskid) return

    async function fetchData() {
      const data = await fetcher(`http://localhost:3001/GetTask/${query.Taskid}`);
      setTaskobj(data);
    }
    fetchData();
  }, [query.Taskid]);

  return (
    <div className="bg-slate-100 h-screen">
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100  h-full">
        {/* Header */}
        <div className="relative bg-slate-900  pt-10 h-full">
          <div className="px-4 md:px-10 mx-auto w-full h-full flex gap-5 flex-col">
            <p className=" font-bold text-left text-pink-500 pl-5 text-xl">
              Task Details
            </p>
            <div
              className="flex flex-wrap gap-5 justify-center items-center h-screen "
              style={{
                backgroundImage: "url(" + "/register_bg_2.png" + ")",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Card stats */}
                <div className=" rounded-lg  w-3/4 h-3/4">
                <TaskForm {...taskobj} />

                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps (context: { params: { Taskid: any; }; }) {
//   const { Taskid } = context.params;

//   store.dispatch(GetTaskInfo(Taskid))

//   return {
//     props: {  },
//   };
// }


export default Task;
