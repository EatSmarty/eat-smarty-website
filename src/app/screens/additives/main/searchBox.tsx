import { FC } from 'react'

interface searchBoxProps {
  
}

const SearchBox: FC<searchBoxProps> = ({}) => {
  return <div>
    <section className='search-box'>
              <input className='placeholder-[#3C3D42] placeholder-opacity-50 w-full mt-3 rounded-sm bg-[#E0DDCA] text-[#3C3D42] outline-none p-2 px-12 pl-5' type="text" placeholder='search...'/>
    </section>
  </div>
}

export default SearchBox