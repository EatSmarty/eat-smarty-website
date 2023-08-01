import { FC } from 'react'

interface bannerProps {
  
}

const Slogan: FC<bannerProps> = ({}) => {
  return <section className='slogan mt-10 text-base w-full text-center text-gray-500'>
        <p className='mb-1'>
        Our startup identifies halal food instantly via barcode scanning,
        </p>
        <p> ensuring your dietary preferences are met effortlessly</p>
    </section>
}

export default Slogan