'use client'

import { FC } from 'react'
import Header from './header'
import Contactus from './contactus'
import Test from './test'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return( 
      <div className='home-screen'>
        <Header></Header>
      <main className='flex justify-center items-center'>
        <div>
          <Contactus></Contactus>
          <Test></Test>
        </div>
      </main>
    </div>
  )
}

export default page