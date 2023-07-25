import Home from '@/app/page'
import { FC } from 'react'
import Header from './header'
import Common from './common'
import Account from './account'
import About from './about'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='account-screen flex justify-center flex-col items-center'>
        <Home></Home>
        <Header></Header>
        <main className='main-content flex justify-center items-center mt-10 flex-col'>
          <Common></Common>
          <Account></Account>
          <About></About>
        </main>
    </div>
  )
}

export default page