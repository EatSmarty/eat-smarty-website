import { FC, useState } from 'react'


interface faqProps {
  
}

const Faq: FC<faqProps> = ({}) => {

  const accordionData = [
    {
        title: "test1?",
        desc: "",
    },
    {
        title: "test2?",
        desc: "",
    },
    {
        title: "test3?",
        desc: "",
    }
]
  return <div>
  <section className='contactus mt-20 text-2xl flex justefy-center items-center flex-col'>
      <p className='title text-bold text-[#0069FE] mb-10'>FAQ</p>
      <div className='contact-box rounded flex justify-center items-center flex-col'>
      </div>
  </section>
</div>
}

export default Faq