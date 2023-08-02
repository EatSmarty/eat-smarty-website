'use client'

import Navigation from '@/app/page'
import { FC } from 'react'
import Header from '../header'
import Category from './category'
import Advertise from './advertise'
import Banner from './banner'
import Slogan from './slogan'
import Features from './features'
import Footer from './footer'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return( 
    <div className='home-screen mb-20'>
      <Navigation></Navigation>
      <Header></Header>
      <main className='flex justify-center items-center'>
        <div>
          <Banner></Banner>
          <Slogan></Slogan>
          <Features></Features>
          <Category></Category>
          <Advertise></Advertise>
          <Footer></Footer>
        </div>
      </main>
    </div>
  )
}

export default page