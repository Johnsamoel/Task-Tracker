import { TaskModel } from "@/models/taskModel";

export const convertToTaskModel=(data:any[]):TaskModel[]=>{
const taskModels= data.map((item):TaskModel=>{
return {
    _id:item._id,
    status:item.status,
    creationDate:item.creationDate,
    title:item.title,
    description:item.description,
    image:item.image
}
})
return taskModels;
}