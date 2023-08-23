'use client'

import { FC } from 'react'

import Faq from '@/components/setting/faq'

interface pageProps {

}


const page: FC<pageProps> = ({ }) => {
  return (
    <div className='home-screen'>

      <main className='flex justify-center items-center'>
        <div>
          <Faq></Faq>

        </div>
      </main>
    </div>
  )
}

export default page