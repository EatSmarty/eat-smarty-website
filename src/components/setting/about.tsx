import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import Arrowicon from '../svg/arrowicon'

interface aboutProps {

}

const About: FC<aboutProps> = ({ }) => {
  return <div>
    <section className={clsx(
      "about",
      "mt-28",
      "text-2xl"
    )}>
      <p className=''>About</p>
      <div className={clsx(
        "about-items",
        "text-xl"
      )}>
        <Link href={'/setting/faq'} className={clsx(
          "setting-item contact-us",
          "flex justify-between itmes-center",
          "w-full",
          "py-3 mt-3",
          "cursor-pointer",
          "rounded border-2"
        )}>
          <div className={clsx(
            "flex justify-center items-center"
          )}>
            <p className={clsx(
              "ml-4"
            )}>FAQ</p>
          </div>
          <Arrowicon />
        </Link>
        <Link href={"/setting/contactus"} className={clsx(
          "setting-item contact-us",
          "flex justify-between itmes-center",
          "w-full", "py-3 mt-3",
          "cursor-pointer",
          "rounded border-2"
        )}>
          <div className={clsx(
            "flex justify-center items-center"
          )}>
            <p className={clsx(
              "ml-4"
            )}>Contact Us</p>
          </div>
          <Arrowicon />
        </Link>
      </div>
    </section>
  </div>
}

export default About