import { FC } from 'react'
import additivesJson from './additives.json'

interface additivesListProps {
  
}
let colour = additivesJson.Colour
console.log(colour[2]['e-number'])
const AdditivesList: FC<additivesListProps> = ({}) => {


  return <div className='e-food mx-10'>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[0]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-orange-400 text-[#fff] p-1 rounded'>{colour[0]['badge']}</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
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
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[3]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>{colour[4]['badge']}</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[4]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[5]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[6]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[7]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[8]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[9]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[10]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[11]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[12]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[13]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[14]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[15]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[16]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[17]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
            <div className='item px-12 p-2 mt-3 rounded pl-5 pr-5 flex flex-col justify-between items-center w-32 h-32'>
              <p className='title'>{colour[18]['e-number']}</p>
              <div className='flex justify-center items-center'>
                <div className='color-palete bg-red-400 text-[#fff] p-1 rounded'>HARAM</div>
              </div>
            </div>
  </div>
}

export default AdditivesList