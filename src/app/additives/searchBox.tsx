import { FC } from 'react'

interface searchBoxProps {
  
}

const SearchBox: FC<searchBoxProps> = ({}) => {
  return <section className='search-box my-20 text-2xl'>
  <div className='search-input flex items-center justify-center rounded'>
    <input className='placeholder-[#3C3D42] placeholder-opacity-50 w-full mt-3 rounded-sm outline-none px-2 flex' type="text" placeholder='search...'/>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500 cursor-pointer absolute">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
  </div>
</section>
}

export default SearchBox