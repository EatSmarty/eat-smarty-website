'use client'

import { FC } from 'react'
import BarcodeScanner from './barcodeScanner'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <div className='home-screen'>
      <main className='flex justify-center items-center'>
        <div>
          <BarcodeScanner></BarcodeScanner>
        </div>
      </main>
    </div>
  )
}

export default page