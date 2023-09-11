import clsx from "clsx"
import Features from "@/components/home/features"
import CopyRight from "@/components/home/copyright"
import Slogan from "@/components/home/slogan"
import Banner from "@/components/home/banner"
import Searchinput from "@/components/additives/searchinput"




export default function page() {
  return (

    <main className={clsx(
      "flex justify-center items-center flex-col",

    )}>
      <Banner />
      <Slogan />
      <Searchinput handleChange={undefined} placeholder={"what product look for..."} />
      <Features />
      <CopyRight />
    </main>

  )
}
