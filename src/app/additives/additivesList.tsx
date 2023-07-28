import { FC } from 'react'
import additivesJson from './additives.json'

interface additivesListProps {
  
}
let colour = additivesJson.Colour

const AdditivesList: FC<additivesListProps> = ({}) => {

  return <div className='e-food mx-10'>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[0].enumber}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-orange-400 text-[#fff] p-1 rounded'>{colour[0].badge}</div>
              </div>
            </div>
            {/* <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[1]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-green-400 text-[#fff] p-1 rounded'>{colour[1]['badge']}</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[2]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>{colour[2]['badge']}</div>
              </div>
            </div> */}
  </div>
}

export default AdditivesList


// {colour.map((index) => (
//   index.enumber
// ))}