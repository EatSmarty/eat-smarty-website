import { FC } from 'react'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <header className='home-header flex justify-around items-center w-full fixed'>
            <div className='header-l flex justify-center items-center mt-5'>
              <h4 className='text-3xl font-bold text-[#0069FE] opacity-80'>Scan</h4>
            </div>
  </header>
}

export default Header