import clsx from "clsx"
import Category from "../../components/home/category"
import Features from "../../components/home/features"
import CopyRight from "../../components/home/copyright"
import Slogan from "../../components/home/slogan"
import Banner from "../../components/home/banner"




export default function page() {
  return (
    <>
      <main className={clsx(
        "flex justify-center items-center flex-col",
      )}>
        <Banner></Banner>
        <Slogan></Slogan>
        <Features></Features>
        <Category></Category>
        <CopyRight></CopyRight>
      </main>
    </>
  )
}
