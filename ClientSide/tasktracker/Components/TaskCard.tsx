import Link from "next/link";
import axios from "axios"
import { useState } from "react";
import Modal from "./Modal";

const TaskCard = (props:{Title:string , description:string , status:string , TaskDate: string , id:string}) => {
  const[showModal, setShowModal]= useState<boolean>(false)
  const [errorexist, setErrorExists]=useState<boolean>(false)
const handleDeleteTask=async()=>{
try {
  if(props.id){
    const result= await axios.delete(`http://localhost:3001/deleteTask/${props.id}`, {withCredentials:true})
    if(result.data.status===200){
      setShowModal(false)
    }
  }
} catch (error) {
  console.log(error,"error")
  setErrorExists(true)
}

}
  return (
    <>
{showModal && <Modal title={errorexist?"There is something wrong":"Do you want to delete this task?"} confirmationValue={errorexist?()=>{
  setShowModal(false)
}:handleDeleteTask} cancelValue={()=>{
  setShowModal(false)
}} showYesNoButton={errorexist?false:true}/>}
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
<button style={{backgroundColor:"red"}} onClick={()=>{
  setShowModal(true)
}}>Click me</button>
      <Link href={`Tasks/${props.id}`}>
    <div className="relative flex flex-col min-w-0 break-words bg-slate-800 hover:bg-slate-700 hover:shadow-lg hover:shadow-pink-500 rounded mb-6 xl:mb-0 shadow-lg">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap">
          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
              {props.Title}
            </h5>
            <span className="font-semibold text-xs text-blueGray-700 ">
              {props.description}
            </span>
          </div>
          <div className="relative w-auto pl-4 flex-initial">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
              <i className="far fa-chart-bar"></i>
            </div>
          </div>
        </div>
        {   props.status === "Completed" && <p className="text-sm text-blueGray-400 mt-4">
          <span className="text-emerald-500 mr-2">
            <i className="fas fa-arrow-up"></i> {props.status}
          </span>
          <span className="whitespace-nowrap"> {props.TaskDate}</span>
        </p>

        }
        {   props.status === "Cancelled" && <p className="text-sm text-blueGray-400 mt-4">
          <span className="text-red-500 mr-2">
            <i className="fas fa-arrow-up"></i> {props.status}
          </span>
          <span className="whitespace-nowrap"> {props.TaskDate}</span>
        </p>

        }
        {   props.status === "Inprogress" && <p className="text-sm text-blueGray-400 mt-4">
          <span className="text-yellow-500 mr-2">
            <i className="fas fa-arrow-up"></i> {props.status}
          </span>
          <span className="whitespace-nowrap"> {props.TaskDate}</span>
        </p>

        }
        {   props.status === "Not Started" && <p className="text-sm text-blueGray-400 mt-4">
          <span className="text-blue-500 mr-2">
            <i className="fas fa-arrow-up"></i> {props.status}
          </span>
          <span className="whitespace-nowrap"> {props.TaskDate}</span>
        </p>

        }
      </div>
    </div>

    </Link>
   
    </div>
    </>
  );
};

export default TaskCard;