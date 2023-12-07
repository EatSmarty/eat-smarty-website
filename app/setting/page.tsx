"use client";

import About from "@/components/setting/about";
import clsx from "clsx";

export default function Page() {
  return (
    <>
      <div className=''>
        <main className={clsx(
          "main-content",
          "flex justify-center items-center flex-col",
        )}>
          <div>
            <About />
          </div>
        </main>
      </div>
    </>
  );
}