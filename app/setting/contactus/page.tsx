'use client'

import { FC } from 'react'
import Contactus from '@/components/setting/contactus'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <div className='home-screen'>
      <main className='flex justify-center items-center'>
        <div>
          <Contactus />
        </div>
      </main>
    </div>
  )
}

export default page