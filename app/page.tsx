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
        "flex items-center flex-col",
        "my-10",
      )}>
        <Banner />
        <Slogan />
        <Searchbarcode />
        <Features />
      </main>
      <footer>
        <CopyRight />
      </footer>
    </>
  );
}