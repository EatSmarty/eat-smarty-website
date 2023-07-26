import Image from 'next/image'
import { FC } from 'react'

interface categoryProps {
  
}

const Category: FC<categoryProps> = ({}) => {
  return <div>
    <section className='category'>
            <p className='mt-10 text-xl'>category</p>
            <div className='category-items'>
                    <Image src="/fruit-3d.jpg"
                      width={100}
                      height={100}
                      alt="fruite"
                      className='rounded'
                     />
                  <Image src="/drink-3d.jpg"
                      width={100}
                      height={100}
                      alt="fruite"
                      className='rounded'
                     />
                  <Image src="/vegetable-3d.jpg"
                      width={100}
                      height={100}
                      alt="fruite"
                      className='rounded'
                     /><Image src="/vegetable-3d.jpg"
                     width={100}
                     height={100}
                     alt="fruite"
                     className='rounded'
                    /><Image src="/vegetable-3d.jpg"
                    width={100}
                    height={100}
                    alt="fruite"
                    className='rounded'
                   /><Image src="/vegetable-3d.jpg"
                   width={100}
                   height={100}
                   alt="fruite"
                   className='rounded'
                  /><Image src="/vegetable-3d.jpg"
                  width={100}
                  height={100}
                  alt="fruite"
                  className='rounded'
                 />
            </div>
        </section>
  </div>
}

export default Category