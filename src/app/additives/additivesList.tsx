import { FC } from 'react'


interface additivesListProps {
  
}

const AdditivesList: FC<additivesListProps> = ({}) => {
  return <div className='e-food mx-10'>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>E100</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-orange-400 text-[#fff] p-1 rounded'>MASHBOOH</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>E102</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-green-400 text-[#fff] p-1 rounded'>HALAL</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>E111</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
  </div>
}

export default AdditivesList