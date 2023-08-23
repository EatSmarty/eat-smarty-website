import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor"
            className={clsx(
              "w-6 h-8 mr-4",
              "hover:mr-3 duration-200",
              "font-bold"
            )}>
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor"
            className={clsx(
              "w-6 h-8",
              "mr-4", "hover:mr-3 duration-200",
              "font-bold"
            )}>
            <path stroke-linecap="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>
    </section>
  </div>
}

export default About