import { FC } from 'react'

interface descProps {
  
}

const Desc: FC<descProps> = ({}) => {
  return <div>
    <section className='contactus mt-20 text-2xl flex justefy-center items-center flex-col'>
        <p>Curcumina</p>
        <div className='flex justify-center items-center'>
            <p className='title text-bold mb-10 mr-2 mt-10'>E100</p>
            <div className='color-palete bg-orange-400 text-[#fff] p-1 rounded'>MASHBOOH</div>
        </div>
        <div className='details flex justify-center items-center flex-col w-3/5 p-10 rounded'>
            <div className='desc'>
                <h3>Description</h3>
                <p className='desc text-xl'>Naturally occurring orange/yellow colour, Extracted from the spice turmeric</p>
            </div>
            <div className='example mt-10'>
                <h3>Example</h3>
                <p className='text-xl'>Used in pastries, confectionery, sauces, and soups</p>
            </div>
        </div>
    </section>
</div>
}

export default Desc