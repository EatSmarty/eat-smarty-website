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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-green-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
            </div>
        </h1>
    </section>
}

export default Banner