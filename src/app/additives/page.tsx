'use client'

import clsx from "clsx"
import AdditiveList from "./additivesList"
import Header from "../../components/header/header"


export default function Page() {
  return (
    <>
      <Header title={'Additives'} />
      <main className={clsx(
        "main-content",
      )}>
        <AdditiveList />
      </main>
    </>
  )
}