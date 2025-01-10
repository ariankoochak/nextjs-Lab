'use server';
import "@/mongoose/mongoose.config"
import tasksModel from "@/mongoose/mongoose.model";
export const addTaskAction = async (initialState,payload)=>{
    const taskTitle = payload.get("taskTitle");
    const taskId = payload.get("taskId");
    const taskBody = payload.get("taskBody");  
    try {
        if(taskId){
            const res = await tasksModel.updateOne({_id : taskId},{$set : {Title : taskTitle,Body : taskBody}});
            return {
                status: 201,
                message: "task edited successfully",
            };
        }
        else{
            const res = await tasksModel.create({Title : taskTitle,Body:taskBody});
            return {
                status : 201,
                message: 'task added successfully'
            }
        }
    } catch (error) {
        return {
            status: 500,
            message: "we have error!",
        };
    }
}