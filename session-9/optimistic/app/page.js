import { readCount } from "@/actions/CounterAction";
import Counter from "@/components/Counter.js";

export default async function Home() {
  const initialCount = await readCount();
  return (
    <div className="m-4 p-4">
      <h1>007 session</h1>
      <Counter initialCount={initialCount} />
    </div>
  );
}
