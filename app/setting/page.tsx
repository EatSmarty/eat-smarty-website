"use client";

import About from "@/components/setting/about";
import clsx from "clsx";
import Header from "@/components/header/header";

export default function Page() {
  return (
    <>
      <Header title={"Setting"}></Header>
      <div className='home-screen mb-20'>
        <main className={clsx(
          "main-content",
          "flex justify-center items-center flex-col",
        )}>
          <div>
            <About></About>
          </div>
        </main>
      </div>
    </>
  );
}