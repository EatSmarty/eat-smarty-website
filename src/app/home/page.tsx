'use client'

import Navigation from '@/app/page'
import { FC } from 'react'
import Header from '../header'
import Category from './category'
import Banner from './banner'
import Slogan from './slogan'
import Features from './features'
import Footer from './footer'
import Why from './why'

export default function page() {
  return (
    <div className='home-screen'>
      <Navigation></Navigation>
      <Header title="home"></Header>
      <main className='main-content flex justify-center items-center flex-col'>
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