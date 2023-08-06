import clsx from 'clsx'
import { FC } from 'react'

interface enumberProps {

}

const Enumber: FC<enumberProps> = ({ }) => {
    return <div>
        <section className={clsx(
            "contactus",
            "mt-20",
            "text-2xl",
            "flex flex-col justify-center items-center"
        )}>
            <div className={clsx(
                "flex justify-center items-center"
            )}>
                <p className={clsx(
                    "title",
                    "text-4xl text-gray-500",
                    "mb-10 mr-2 mt-10"
                )}>E100 |</p>
                <p className={clsx(
                    "halal",
                    "rounded",
                    "text-2xl text-[#fff]",
                    "p-1"
                )}>Halal</p>
            </div>
            <div className={clsx(
                "details",
                "p-5",
                "rounded",
                "text-center",
                "w-96"
            )}>
                <div className={clsx(
                    "mb-5"
                )}>
                    <span className={clsx(
                        "text-gray-500",
                        "font-bold",
                        "mr-5"
                    )}>name</span>
                    <span>Curcumina</span>
                </div>
                <div className={clsx(
                    "desc",
                    "mb-10"
                )}>
                    <span className={clsx(
                        "text-gray-500 font-bold",
                        "mr-5"
                    )}>description</span>
                    <span className={clsx(
                        "desc",
                        "text-xl"
                    )}>Naturally occurring orange/yellow colour,
                        Extracted from the spice turmeric</span>
                </div>
                <div className={clsx(
                    "example",
                    "mb-10"
                )}>
                    <span className={clsx(
                        "text-gray-500 font-bold",
                        "mr-5"
                    )}>Example</span>
                    <span className={clsx(
                        "text-xl"
                    )}>Used in pastries,
                        confectionery,
                        sauces, and soups
                    </span>
                </div>
            </div>
        </section>
    </div>
}

export default Enumber