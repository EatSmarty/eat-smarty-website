import { FC } from 'react'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <header className='home-header flex justify-between items-center w-full fixed'>
            <div className='header-l flex justify-center items-center mt-5'>
              <h4 className='text-3xl font-bold text-[#0069FE]'>Home</h4>
            </div>
              <a href='https://halalvar.com/' className="header-r bg-[#0069FE] text-[#fff] rounded-full p-3 mt-5">
                Hal.
              </a>
  </header>
}

export default Header