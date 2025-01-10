import "@/mongoose/mongoose.config";
import tasksModel from "@/mongoose/mongoose.model";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { taskId } = await req.json();    
    const task = await tasksModel.findById(taskId);
    return NextResponse.json(task);
}
