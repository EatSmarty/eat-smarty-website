import clsx from 'clsx'
import { FC } from 'react'

interface featuresProps {

}

const Features: FC<featuresProps> = ({ }) => {
    return <section className={clsx(
        "flex flex-col justify-around items-stretch",
        "md:flex-row",
        "my-10",
        "text-base",
    )}>
        <div className={clsx(
            "flex justify-center items-stretch",
            "rounded",
            "w-40 h-40",
            "shadow",
            "m-5",
        )}>
            <div className={clsx(
                "flex flex-col justify-between items-center",
                "m-5"
            )}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor"
                    className={clsx(
                        "w-10 h-10",
                        "duration-200 hover:text-[#0069FE]",
                        "text-gray-500"
                    )}>
                    <path d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625
                 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    />
                </svg>
                <p className={clsx(
                    "desc-feature",
                    "font-bold text-gray-500",
                    "text-center"
                )}>Additives List</p>
            </div>
        </div>
        <div className={clsx(
            "flex justify-center items-stretch",
            "rounded",
            "w-40 h-40",
            "shadow",
            "m-5"
        )}>
            <div className={clsx(
                "flex flex-col justify-between items-center",
                "m-5"
            )}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor"
                    className={clsx(
                        "w-10 h-10",
                        "duration-200 hover:text-[#0069FE]",
                        "text-gray-500"
                    )}>
                    <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653
                 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097
                 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25
                 4.125s-8.25-1.847-8.25-4.125V6.375m16.5
                 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12
                 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25
                 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
                <p className={clsx(
                    "desc-feature",
                    "font-bold text-gray-500",
                    "w-34 mt-5 text-center"
                )}>Independent Database</p>
            </div>
        </div>
        <div className={clsx(
            "flex justify-center items-stretch",
            "rounded",
            "w-40 h-40",
            "shadow",
            "m-5"
        )}>
            <div className={clsx(
                "flex flex-col justify-between items-center",
                "m-5"
            )}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor"
                    className={clsx(
                        "w-10 h-10",
                        "duration-200 hover:text-[#0069FE]",
                        "text-gray-500"
                    )}>
                    <path d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0
                1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125
                1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75
                14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504
                1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125
                1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125
                1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504
                1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                    <path d="M6.75 6.75h.75v.75h-.75v-.75zM6.75
                16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5
                13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5
                13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5
                16.5h.75v.75h-.75v-.75z" />
                </svg>
                <p className={clsx(
                    "desc-feature",
                    "font-bold text-gray-500",
                    "w-34",
                    "mt-5 text-center"
                )}>Halal Food Detect</p>
            </div>
        </div>
        <div className={clsx(
            "flex justify-center items-stretch",
            "rounded",
            "w-40 h-40",
            "shadow",
            "m-5"
        )}>
            <div className={clsx(
                "flex flex-col justify-between items-center",
                "m-5"
            )}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor"
                    className={clsx(
                        "w-10 h-10",
                        "duration-200 hover:text-[#0069FE]",
                        "text-gray-500"
                    )}>
                    <path d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708
                2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0
                0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <p className={clsx(
                    "desc-feature",
                    "font-bold text-gray-500",
                    "w-34",
                    "mt-5 text-center"
                )}>Comprehensive Information</p>
            </div>
        </div>
    </section>
}

export default Features