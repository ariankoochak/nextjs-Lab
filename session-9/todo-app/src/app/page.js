import Link from "next/link";

import "@/mongoose/mongoose.config";
import tasksModel from "@/mongoose/mongoose.model";

async function getAllTasks() {
  const tasks = await tasksModel.find({IsDone : false});
  return tasks;  
}

export default async function page() {
  const tasks = await getAllTasks();
  
  return (
    <>
    <Link href='/submit-task'>
      <button>add new task</button>
    </Link>
    {tasks.map((task)=>{
      return (
          <>
              <div key={task._id}>
                  <div>{task.Title}</div>
                  <div>{task.Body}</div>
                  <br />
                  <Link href={`/submit-task/${task._id}/done`}>Mark as Done</Link> | 
                  <Link href={`/submit-task/${task._id}/del`}>Delete</Link>
                  <br />
                  <br />
                  <br />
                  <br />
              </div>
          </>
      );
    })}
    </>
  )
}
