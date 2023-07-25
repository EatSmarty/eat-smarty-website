import { FC } from 'react'

interface historyProps {
  
}

const History: FC<historyProps> = ({}) => {
  return <div>
    <section className='history'>
            <div className='mt-10'>
              <p className='text-[#F6F8E2] text-xl'>last search</p>
              <ul className='history-list mt-3'>
                <li className='history-item flex justify-between rounded-sm mb-4 p-5 text-[#3C3D42]'>
                  <p className='w-40 text-sm'>Robinsons Double Concentrate No Added Sugar Orange Squash 1.75L</p>
                  <img className='w-20 h-20 rounded-sm' src="/orange-juice.jpeg" alt="" />
                </li>
                <li className='history-item flex justify-between rounded-sm mb-4 p-5 text-[#3C3D42]'>
                  <p className='w-40 text-sm'>Gogo Squeez Fruit Snack Apple Strawberry 4X90g</p>
                  <img className='w-20 h-20 rounded-sm' src="/jelly.jpeg" alt="" />
                </li>
                <li className='history-item flex justify-between rounded-sm mb-4 p-5 text-[#3C3D42]'>
                  <p className='w-40 text-sm'>Tesco Large Pork Shoulder Joint</p>
                  <img className='w-20 h-20 rounded-sm' src="/porkmeat.jpeg" alt="" />
                </li>
                <li className='history-item flex justify-between rounded-sm mb-4 p-5 text-[#3C3D42]'>
                  <p className='w-40 text-sm'>Magnum Classic Ice Cream Sticks 3 X 100Ml</p>
                  <img className='w-20 h-20 rounded-sm' src="/icecream.jpeg" alt="" />
                </li>
                <li className='history-item flex justify-between rounded-sm mb-4 p-5 text-[#3C3D42]'>
                  <p className='w-40 text-sm'>Warburtons Thin Bagels Plain 6 Pack</p>
                  <img className='w-20 h-20 rounded-sm' src="/bread.jpeg" alt="" />
                </li>
              </ul>
            </div>
          </section>
  </div>
}

export default History