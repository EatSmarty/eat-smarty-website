import { FC } from 'react'

interface categoryProps {
  
}

const Category: FC<categoryProps> = ({}) => {
  return <div>
    <section className='category'>
            <p className='text-[#F6F8E2] mt-10 text-xl'>category</p>
            <div className='containers flex w-100 scroll-section-outer'>
                <div className='scroll-section-inner flex relative mt-5'>
                  <div className='item1 w-16 mr-10'>
                    <img src="/fruit.png" alt="" />
                  </div>
                  <div className='item2 w-16 mr-10'>
                    <img src="/trick-or-treat.png" alt="" />
                  </div>
                  <div className='item3 w-16 mr-10'>
                    <img src="/frozen-food.png" alt="" />
                  </div>
                  <div className='item4 w-16 mr-10'>
                    <img src="/soft-drink.png" alt="" />
                  </div>
                  <div className='item5 w-16 mr-10'>
                    <img src="/bread.png" alt="" />
                  </div>
                  <div className='item6 w-16 mr-10'>
                    <img src="/begetable.png" alt="" />
                  </div>
                </div>
            </div>
        </section>
  </div>
}

export default Category