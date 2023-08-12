'use client'

import clsx from "clsx"
import Category from "../../components/home/category"
import Features from "../../components/home/features"
import Footer from "../../components/home/footer"
import Slogan from "../../components/home/slogan"
import Why from "../../components/home/why"
import Banner from "../../components/home/banner"




export default function page() {
  return (
    <div className='home-screen'>
      <main className={clsx(
        "main-content",
        "flex justify-center items-center flex-col"
      )}>
        <Banner></Banner>
        <Slogan></Slogan>
        <Why></Why>
        <Features></Features>
        <Category></Category>
        <Footer></Footer>
      </main>
    </div >
  )
}
