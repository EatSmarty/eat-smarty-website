'use client'

import clsx from "clsx"
import AdditiveList from "./additivesList"
import Search from "./search"
import Header from "../header"


export default function Page() {
  return (
    <>
      <Header title={'Additives'} />
      <main className={clsx(
        "main-content",
        "mb-14",
        "flex justify-center items-center flex-col"
      )}>
        <div className={clsx(
          "mt-5"
        )}>
          <Search />
          <AdditiveList />
        </div>
      </main>
    </>
  )
}