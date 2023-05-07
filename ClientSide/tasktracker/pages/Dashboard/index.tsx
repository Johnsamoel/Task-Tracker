import AddIcon from "@/Components/AddIcon";
import BarChart from "@/Components/BarChart";
import Pagination from "@/Components/Pagination";
import Sidebar from "@/Components/Sidebar";
import TaskCard from "@/Components/TaskCard";
import axios from "axios";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";

import { TaskModel } from "@/models/taskModel";
import NewTask from "@/Components/NewTask";
import { useState } from "react";
import { convertToTaskModel } from "@/dataConverters.ts/taskConverter";



const Dashboard = (props: any) => {


  return (
    <div className="bg-slate-100 h-screen">
      <Sidebar />
    
    </div>
  );
};

export default Dashboard;
