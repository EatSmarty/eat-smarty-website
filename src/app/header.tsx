import Image from 'next/image'
import { FC } from 'react'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <header className='home-header flex justify-around items-center w-full fixed pt-5'>
            <div className='header-l flex justify-center items-center'>
              <h4 className='text-3xl font-bold text-[#0069FE] opacity-80'>Home</h4>
            </div>
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt='logo'
              className='logo'
            />
  </header>
}

export default Header