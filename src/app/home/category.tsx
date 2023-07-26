import Image from 'next/image'
import { FC } from 'react'

interface categoryProps {
  
}

const Category: FC<categoryProps> = ({}) => {
  return <div>
    <section className='category'>
            <p className='mt-10 text-2xl'>category</p>
            <div className='category-items'>
                  <div className="container cursor-pointer">
                    <Image src="/fruit-3d.jpg"
                        width={100}
                        height={100}
                        alt="fruite"
                        className='image rounded'
                      />
                      <div className="overlay">
                        <div className='text'>Fruit</div>
                      </div>
                  </div>
                  <div className="container cursor-pointer">
                    <Image src="/drink-3d.jpg"
                        width={100}
                        height={100}
                        alt="fruite"
                        className='image rounded'
                      />
                      <div className="overlay">
                        <div className='text'>Drink</div>
                      </div>
                  </div>
                  <div className="container cursor-pointer">
                    <Image src="/vegetable-3d.jpg"
                        width={100}
                        height={100}
                        alt="fruite"
                        className='image rounded'
                      />
                      <div className="overlay">
                        <div className='text'>Vegetabls</div>
                      </div>
                  </div>
            </div>
        </section>
  </div>
}

export default Category