import Home from '@/app/page'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
        <Home></Home>
        <div className='container flex justify-center items-center min-h-screen'>
          <a className='scan p-5 flex justify-center items-center'>tap to scan</a>
        </div>
    </div>
  )
}

export default page