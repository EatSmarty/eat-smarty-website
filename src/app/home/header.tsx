import { FC } from 'react'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <header className='home-header flex justify-between items-center w-full mt-10'>
            <div className='header-l flex justify-center items-center'>
              <h4 className='mr-2'>Hi There</h4>
              <div className='wave text-xl'>👋</div>
            </div>
              <a href='https://halalvar.com/' className="header-r bg-[#9CCD62] text-black rounded-full p-2 ">
                Hal.
              </a>
  </header>
}

export default Header