import Sidebar from "@/Components/Sidebar";
import TaskForm from "@/Components/TaskForm";

const Task = () => {
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
                <TaskForm />

                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
