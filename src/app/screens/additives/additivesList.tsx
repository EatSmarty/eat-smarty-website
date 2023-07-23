import { FC } from 'react'
import DisplayDetails from '../additives/displayDetails'


interface additivesListProps {
  
}

const AdditivesList: FC<additivesListProps> = ({}) => {
  return <div>
            <h4>Lists</h4>
            <div onClick={DisplayDetails} className='item bg-[#E0DDCA] px-12 p-2 mt-3 rounded-sm pl-5 pr-5 text-[#3C3D42] flex justify-between items-center'>
              <p className='title'>E100</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete w-5 h-5 rounded-full bg-orange-500'></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 opacity-80 ml-2 hover:ml-1 duration-200 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
            <div className='item bg-[#E0DDCA] px-12 p-2 mt-3 rounded-sm pl-5 pr-5 text-[#3C3D42] flex justify-between items-center '>
              <p className='title'>E102</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete w-5 h-5 rounded-full bg-green-500'></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 opacity-80 ml-2 hover:ml-1 duration-200 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
            <div className='item bg-[#E0DDCA] px-12 p-2 mt-3 rounded-sm pl-5 pr-5 text-[#3C3D42] flex justify-between items-center'>
              <p className='title'>E111</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete w-5 h-5 rounded-full bg-red-500'></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 opacity-80 ml-2 hover:ml-1 duration-200 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
  </div>
}

export default AdditivesList