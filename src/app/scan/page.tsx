'use client'

import { FC } from 'react'
import Header from './header'
import Home from '../page'
import BarcodeScanner from './barcodeScanner'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return( 
      <div className='home-screen'>
        <Home></Home>
        <Header></Header>
      <main className='flex justify-center items-center'>
        <div>
          <BarcodeScanner></BarcodeScanner>
        </div>
      </main>
    </div>
  )
}

export default page