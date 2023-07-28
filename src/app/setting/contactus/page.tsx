'use client'

import Home from '@/app/page'
import { FC } from 'react'
import Header from './header'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return( 
    <div className='home-screen mb-20'>
      <Header></Header>
      <main className='flex justify-center items-center'>
      </main>
    </div>
  )
}

export default page