'use client'

import Home from '@/app/page'
import headerSection from './header'
import { FC } from 'react'
import Header from './header'
import Search from './search'
import Category from './category'
import History from './history'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return( 
    <div className='home-screen'>
      <Home></Home>
      <Header></Header>
      <main className='flex justify-center items-center'>
        <div>
          <Search></Search>
          <Category></Category>
          <History></History>
        </div>
      </main>
    </div>
  )
}

export default page