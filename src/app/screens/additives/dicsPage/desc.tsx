import { FC } from 'react'

interface descProps {
  
}

const Desc: FC<descProps> = ({}) => {
  return <div id='descs' className='desc-show overflow-hidden overflow-y-scroll bg-[#F6F8E2] text-[#3C3D42] w-64 h-96 rounded'>
    <div className=''>
        <header>
            <h1 className='p-2'>E-Number</h1>
        </header>
        <main className=''>
            <p className='p-10 overflow-hidden overflow-y-scroll'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex velit explicabo dolores alias aut excepturi 
                numquam quam? Nesciunt recusandae quas id vitae repellat alias deleniti quidem perspiciatis beatae voluptate?
                numquam quam? Nesciunt recusandae quas id vitae repellat alias deleniti quidem perspiciatis beatae voluptate?
                numquam quam? Nesciunt recusandae quas id vitae repellat alias deleniti quidem perspiciatis beatae voluptate?
            </p>
        </main>
    </div>
  </div>
}

export default Desc