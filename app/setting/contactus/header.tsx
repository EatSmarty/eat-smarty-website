import Link from 'next/link'
import { FC } from 'react'

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
  return <header className='home-header flex flex-row justify-between items-center w-full fixed'>
    <div className='header-l mt-5'>
      <Link href={"/setting"} className='flex flex-row justify-between items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ml-4 hover:ml-3 duration-200 font-bold">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <span>Setting</span>
      </Link>
    </div>
  </header>
}

export default Header