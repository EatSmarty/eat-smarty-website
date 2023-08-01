'use client'

import Navigation from '@/app/page'
import { FC } from 'react'
import Header from '../header'
import Category from './category'
import Advertise from './advertise'
import Banner from './banner'
import Slogan from './slogan'

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
          <Category></Category>
          <Advertise></Advertise>
        </div>
      </main>
    </div>
  )
}

export default page