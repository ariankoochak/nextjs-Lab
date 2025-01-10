"use client";
import { useActionState, useEffect, useState } from "react";
import { addTaskAction } from "../../../../actions/AddTask";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function page() {
    const router = useRouter();
    const pathname = usePathname();
    const taskId = pathname.split('/')[2];
    const action = pathname.split('/')[3];
    const [taskTitle,setTaskTitle] = useState('')
    const [taskBody,setTaskBody] = useState('')


    const [data,dispatch,isPending] = useActionState(addTaskAction,'initState')

    const getTask = async ()=>{
      if (taskId) {
          const response = await fetch(
              "http://localhost:3000/api/get-task",
              {
                  body: JSON.stringify({ taskId }),
                  method: "post",
              }
          );
          const result = await response.json();
          setTaskTitle(result.Title);
          setTaskBody(result.Body);
      }
    }

    const deleteTask = async () => {
        if (taskId) {
            const response = await fetch("http://localhost:3000/api/del-task", {
                body: JSON.stringify({ taskId }),
                method: "delete",
            });
            router.push('/');
        }
    };

    const markAsDoneTask = async () => {
        if (taskId) {
            const response = await fetch("http://localhost:3000/api/done-task", {
                body: JSON.stringify({ taskId }),
                method: "post",
            });
            router.push("/");
        }
    };

    useEffect(()=>{
      if(action){
        action === 'done' ? markAsDoneTask() : deleteTask();
      }
      getTask();
    },[])
  return (
      <div>
        <Link href={'/'}><button>back</button></Link>
          <form action={dispatch}>
              <input name="taskTitle" placeholder="Title" defaultValue={taskTitle}/>
              <input name="taskBody" placeholder="Body" defaultValue={taskBody}/>
              <input name="taskId" type="hidden" value={taskId}/>
              <button type="submit">
                {isPending ? 'Loading' : taskId ? 'edit task' : 'add task'}
                </button>
                <br/>
                {data.message}
          </form>
      </div>
  );
}
