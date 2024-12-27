"use client";

import { useRef } from "react";

export default function LoginPage() {
  const inputRef = useRef({});


  const handleSubmit = () => {
    const userName = inputRef.current.username.value;
    const password = inputRef.current.password.value;

    fetch('/api/auth', {
        method: 'post',
        body: JSON.stringify({userName,password})
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
    

  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">LOGIN/SIGNUP</h1>

        <form className="flex flex-col">
          <input
            placeholder="username"
            type="text"
            className="border-2 border-slate-500 my-2 p-2 rounded-md"
            ref={(element) => {inputRef.current.username = element}}
          />
          <input
            placeholder="password"
            type="text"
            className="border-2 border-slate-500 my-2 p-2 rounded-md"
            ref={(element) => {inputRef.current.password = element}}

          />
        </form>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            rel="noopener noreferrer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}
