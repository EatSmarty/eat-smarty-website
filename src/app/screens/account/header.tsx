import { FC } from 'react'

interface headerProps {
  
}

const Header: FC<headerProps> = ({}) => {
  return <div>
    <header className='header text-[#F6F8E2] flex justify-center items-center mt-7'>
          <h4 className='Account'>Account</h4>
    </header>
  </div>
}

export default Header