import "@/mongoose/mongoose.config";
import tasksModel from "@/mongoose/mongoose.model";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    const { taskId } = await req.json();    
    const task = await tasksModel.deleteOne({_id : taskId});
    return NextResponse.json(task).status(206);
}
