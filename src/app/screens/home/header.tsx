import { FC } from 'react'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <div>
    <header className='home-header flex justify-center items-center mt-7'>
        <section className='flex justify-between items-center '>
          <div className='flex justify-center items-center mr-20'>
            <img className='w-10 rounded-full mr-3' src='../../../../public/avatar-2023.jpg' alt="avatar" />
            <h4 className='text-[#F6F8E2] mr-1'>Hey Hosein</h4>
            <div className='wave text-xl'>👋</div>
          </div>
            <a href='https://halalvar.com/' className="logo bg-[#9CCD62] text-black rounded-full p-2 text-[#3C3D42]">
              Hal.
            </a>
        </section>
      </header>
  </div>
}

export default Header