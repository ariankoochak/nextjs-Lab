'use client'

import { useRouter } from "next/navigation";



export default function DASHBOARDPAGE() {
  const router = useRouter();
  const handleClickSignOut = ()=>{
       fetch("/api/auth", {
           method: "delete",
       })
      .then((response) => {
          router.push('/login');
      })
      .catch((error) => {
          console.log(error);
      });
  }
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center text-center">
         <h1 className="text-3xl font-bold">DASHBOARD</h1>
         <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            rel="noopener noreferrer"
           onClick={handleClickSignOut}
          >
            Sign Out
          </button>
        </main>
       
      </div>
    );
  }
  