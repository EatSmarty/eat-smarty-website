'use client'

import clsx from "clsx"
import AdditiveList from "./additivesList"
import Search from "./search/search"
import Header from "../header"


export default function Page() {
  return (
    <>
      <Header title={'Additives'} />
      <div className={clsx(
        "home-screen",
      )}>
        <main className={clsx(
          "main-content",
          "mt-5 mb-14",
          "flex justify-center items-center flex-col"
        )}>
          <div>
            <Search />
            <AdditiveList />
          </div>
        </main>
      </div>
    </>
  )
}