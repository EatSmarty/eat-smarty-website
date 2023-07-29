import { FC, MouseEventHandler, ReactNode } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface accordionProps {
  open: ReactNode
  toggle: MouseEventHandler
  title: ReactNode
  desc: ReactNode
}

const Accordion: FC<accordionProps> = ({open, toggle, title, desc}) => {
  return <div className='p-10'>
    <div className='bg-red-200' onClick={toggle}>
        <p>{title}</p>
        <div className=''>
            {open ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </div>
    </div>
    <Collapse isOpene={open}>
        <div className='desc'>{desc}</div>
    </Collapse>
  </div>
}

export default Accordion