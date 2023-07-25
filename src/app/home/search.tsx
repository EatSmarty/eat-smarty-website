import { FC } from 'react'

interface searchProps {
  
}

const Search: FC<searchProps> = ({}) => {
  return <div>
    <section className='search-box'>
        <p className='text-[#F6F8E2] font-light opacity-50 mt-10 mr-10'>What product are you looking for?</p>
        <input className='placeholder-[#3C3D42] placeholder-opacity-50 w-full mt-3 rounded-sm bg-[#E0DDCA] text-[#3C3D42] outline-none p-2 pl-5' type="text" placeholder='search...'/>
    </section>
  </div>
}

export default Search