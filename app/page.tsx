"use client";

import clsx from "clsx";
import Features from "@/components/home/features";
import CopyRight from "@/components/home/copyright";
import Slogan from "@/components/home/slogan";
import Banner from "@/components/home/banner";
import Searchbarcode from "@/components/home/searchbarcode";

export default function Page() {

  return (
    <>
      <main className={clsx(
        "min-h-screen",
        "flex flex-col items-center justify-between",
        "my-16",
      )}>
        <Banner />
        <Slogan />
        <span className={clsx(
          "md:w-1/2 w-full",
          "px-3",
        )}>
          <Searchbarcode />
        </span>
        <Features />
        <CopyRight />
      </main>
    </>
  );
}