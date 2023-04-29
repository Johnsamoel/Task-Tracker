import AddIcon from "@/Components/AddIcon";
import BarChart from "@/Components/BarChart";
import Pagination from "@/Components/Pagination";
import Sidebar from "@/Components/Sidebar";
import TaskCard from "@/Components/TaskCard";
import NewTask from "@/Components/NewTask";
import { useState } from "react";

const Dashboard = () => {

  const [showModal, setshowModal] = useState(false)

  return (
    <div className="bg-slate-100 h-screen">
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100  h-full">
        {/* Header */}
        <div className="relative bg-slate-900  pt-10 h-full">
          <div className="px-4 md:px-10 mx-auto w-full h-full flex gap-5 flex-col">
            <p className=" font-bold text-left text-pink-500 pl-5 text-xl">Your Tasks</p>
            <div className="flex flex-wrap gap-5 justify-center items-center "         style={{
          backgroundImage: "url(" + "/register_bg_2.png" + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}>
              {/* Card stats */}
              <TaskCard Title="Back end" description="ensure authentication" TaskDate={new Date().toDateString()} status="Not Started"/>
              <TaskCard Title="Back end" description="ensure authentication" TaskDate={new Date().toDateString()} status="Inprogress"/>
              <TaskCard Title="Back end" description="ensure authentication" TaskDate={new Date().toDateString()} status="Cancelled"/>
              <TaskCard Title="Back end" description="ensure authentication" TaskDate={new Date().toDateString()} status="Completed"/>
              <TaskCard Title="Back end" description="ensure authentication" TaskDate={new Date().toDateString()} status="Not Started"/>
              <TaskCard Title="Back end" description="ensure authentication" TaskDate={new Date().toDateString()} status="Inprogress"/>
              <TaskCard Title="Back end" description="ensure authentication" TaskDate={new Date().toDateString()} status="Cancelled"/>
              <TaskCard Title="Back end" description="ensure authentication" TaskDate={new Date().toDateString()} status="Completed"/>
              <TaskCard Title="Back end" description="ensure authentication" TaskDate={new Date().toDateString()} status="Not Started"/>
              <TaskCard Title="Back end" description="ensure authentication" TaskDate={new Date().toDateString()} status="Inprogress"/>


            </div>
            <div className="flex justify-end items-center w-full">
          { !showModal && <AddIcon ClickFn={() => { setshowModal(true) }}/>} 
             { showModal && <NewTask showModalfn={() => { setshowModal(false) }} />}
            </div>
            <div className="flex justify-center items-center ">
              <Pagination destinationUrl="/" totalNumber={10}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
