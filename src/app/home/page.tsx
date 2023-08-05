'use client'

import Navigation from '@/app/page'
import Header from '../header'
import Category from './category'
import Banner from './banner'
import Slogan from './slogan'
import Features from './features'
import Footer from './footer'
import Why from './why'
import clsx from 'clsx'

export default function page() {
  return (
    <div className='home-screen'>
      <Navigation></Navigation>
      <Header title="home"></Header>
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