"use client";

import { addCount } from "@/actions/CounterAction";
import { useState, useTransition } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [isPending, startTransition] = useTransition();

  let backupCount;
  const handleAddCounter = async () => {
    backupCount = count;
    let newCount;
    startTransition(async () => {
      try {
        newCount = await addCount();
      } catch (error) {
        setCount(backupCount);
      }
    });
    setCount(count + 1);
  };
  return (
    <>
      <h1>Counter</h1>
      <h2 className="text-xl font-bold">{count}</h2>
      <button
        onClick={handleAddCounter}
        className="border-2 border-slate-500 py-1 px-6 bg-black text-white rounded"
        disabled={isPending}
      >
        ADD
      </button>
    </>
  );
};

export default Counter;
