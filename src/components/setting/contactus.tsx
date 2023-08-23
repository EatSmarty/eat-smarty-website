import clsx from 'clsx'
import { FC } from 'react'

interface contactusProps {

}

const Contactus: FC<contactusProps> = ({ }) => {
    return <>
        <section className={clsx(
            "flex justefy-center items-center flex-col",
            "text-2xl",
            "mt-32"
        )}>
            <p className={clsx(
                "title",
                "mb-10",
                "text-bold text-[#0069FE]"
            )}>Contact Us</p>
            <div className={clsx(
                "flex justify-center items-center flex-col",
                "rounded"
            )}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor"
                    className="w-10 h-10 wave text-yellow-400">
                    <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967
                    8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0
                    01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255
                     24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124
                     7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                </svg>
                <p className={clsx(
                    "text-base text-gray-500 text-center",
                    "m-10",
                )}>
                    Hi! We are happy to hear from you. If you have any questions
                    or comments about our project, please contact us.
                    You can contact us via github issue. We are always
                    looking for ways to improve our project, So if you want to
                    work with us, please let us know! Thank you for your support.
                </p>
                <a className={clsx(
                    "bg-[#0069FE]",
                    "text-[#fff]",
                    "rounded",
                    "p-1.5  mb-5"
                )} href="https://github.com/Halalvar/halalvar/issues" target='_blank'>
                    Github Issues
                </a>
            </div>
        </section>
    </>
}

export default Contactus