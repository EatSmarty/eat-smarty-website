import { FC } from 'react'

interface descProps {
  
}

const Desc: FC<descProps> = ({}) => {
  return <div>
    <section className='contactus mt-40 text-2xl flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
            <p className='title text-4xl text-gray-500 mb-10 mr-2 mt-10'>E100 |</p>
            <p className='halal text-[#fff] rounded text-2xl p-1'>Halal</p>
        </div>
        <div className='details p-10 rounded text-center w-96'>
            <div className='mb-10'>
                <span className='text-gray-500 font-bold mr-5'>name</span>
                <span>Curcumina</span>
            </div>
            <div className='desc mb-10'>
                <span className='text-gray-500 font-bold mr-5'>description</span>
                <span className='desc text-xl'>Naturally occurring orange/yellow colour, Extracted from the spice turmeric</span>
            </div>
            <div className='example mb-10'>
                <span className='text-gray-500 font-bold mr-5'>Example</span>
                <span className='text-xl'>Used in pastries, confectionery, sauces, and soups</span>
            </div>
        </div>
    </section>
</div>
}

export default Desc