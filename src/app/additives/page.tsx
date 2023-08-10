'use client'

import clsx from "clsx"
import AdditiveList from "./additivesList"
import Search from "./search/search"


export default function Page() {
  return (
    <div className={clsx(
      "home-screen",
    )}>
      <main className={clsx(
        "main-content",
        "mt-5 mb-14",
        "flex justify-center items-center flex-col"
      )}>
        <div>
          <Search></Search>
          <AdditiveList></AdditiveList>
        </div>
      </main>
    </div>
  )
}