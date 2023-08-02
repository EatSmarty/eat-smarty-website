import { FC } from 'react'

interface bannerProps {
  
}

const Banner: FC<bannerProps> = ({}) => {
  return <section className='banner mt-40 text-2xl w-full'>
        <h1 className='title'>
            <div className='mb-2 flex justify-center items-baseline'>
                <span className='title text-6xl text-[#0069FE] font-bold mr-2'>Halalvar</span>
                <span className='sub-title text-4xl font-bold text-gray-500'>Barcode-wise,</span>
            </div>
            <div className='flex justify-center items-center'>
                <span className='sub-title text-4xl font-bold text-gray-500 mr-2'>Halal-wise</span>
            </div>
        </h1>
    </section>
}

export default Banner