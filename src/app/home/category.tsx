import Image from 'next/image'
import { FC } from 'react'

interface categoryProps {
  
}

const Category: FC<categoryProps> = ({}) => {
  return <div>
    <section className='category mt-20 mx-5'>
            {/* <p className='mt-10 text-2xl'>category</p> */}
            <div className='category-items'>
                  <div className="container cursor-pointer">
                    <Image src="https://halalvar.github.io/halalvar/fruit-3d.jpg"
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
                    <Image src="https://halalvar.github.io/halalvar/drink-3d.jpg"
                        width={100}
                        height={100}
                        alt="drink"
                        className='image rounded'
                      />
                      <div className="overlay">
                        <div className='text'>Drink</div>
                      </div>
                  </div>
                  <div className="container cursor-pointer">
                    <Image src="https://halalvar.github.io/halalvar/vegetable-3d.jpg"
                        width={100}
                        height={100}
                        alt="vegetabls"
                        className='image rounded'
                      />
                      <div className="overlay">
                        <div className='text'>Vegetabls</div>
                      </div>
                  </div>
                  <div className="container cursor-pointer">
                    <Image src="https://halalvar.github.io/halalvar/bread-3d.jpg"
                        width={100}
                        height={100}
                        alt="bread"
                        className='image rounded'
                      />
                      <div className="overlay">
                        <div className='text'>Bread</div>
                      </div>
                  </div>
                  <div className="container cursor-pointer">
                    <Image src="https://halalvar.github.io/halalvar/fresh-food-3d.jpg"
                        width={100}
                        height={100}
                        alt="fresh food"
                        className='image rounded'
                      />
                      <div className="overlay">
                        <div className='text'>FreshFood</div>
                      </div>
                  </div>
                  <div className="container cursor-pointer">
                    <Image src="https://halalvar.github.io/halalvar/ice-cream-3d.jpg"
                        width={100}
                        height={100}
                        alt="ice cream"
                        className='image rounded'
                      />
                      <div className="overlay">
                        <div className='text'>Ice-cream</div>
                      </div>
                  </div>
                  <div className="container cursor-pointer">
                    <Image src="https://halalvar.github.io/halalvar/ice-cream-3d.jpg"
                        width={100}
                        height={100}
                        alt="ice cream"
                        className='image rounded'
                      />
                      <div className="overlay">
                        <div className='text'>Ice-cream</div>
                      </div>
                  </div>
            </div>
        </section>
  </div>
}

export default Category