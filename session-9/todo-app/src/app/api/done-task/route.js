import "@/mongoose/mongoose.config";
import tasksModel from "@/mongoose/mongoose.model";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { taskId } = await req.json();    
    const task = await tasksModel.updateOne({_id : taskId}, {$set : {IsDone : true}});
    return NextResponse.json(task).status(201);
}
