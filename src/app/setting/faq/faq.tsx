import { FC } from 'react'
import Accordion from './accordion'

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
          {accordionData.map((data, index) => {
            // eslint-disable-next-line react/jsx-key
            return <Accordion open={undefined} toggle={undefined} title={undefined} desc={undefined}></Accordion>
          })}
      </div>
  </section>
</div>
}

export default Faq