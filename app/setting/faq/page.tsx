'use client'

import { FC } from 'react'

import Faq from '@/components/setting/faq'

interface pageProps {

}


const page: FC<pageProps> = ({ }) => {
  return (
    <div className='home-screen'>

      <main className='flex justify-center items-center'>

        <Faq />

      </main>
    </div>
  )
}

export default page