'use client'

import { FC } from 'react'
import Header from '../contactus/header'
import Faq from './faq'

interface pageProps {
  
}


const page: FC<pageProps> = ({}) => {
  return( 
      <div className='home-screen'>
        <Header></Header>
      <main className='flex justify-center items-center'>
        <div>
            <Faq></Faq>
            
        </div>
      </main>
    </div>
  )
}

export default page