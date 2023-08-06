import clsx from 'clsx'
import { FC } from 'react'
import GaugeChart from 'react-gauge-chart'
import { US, EU, AU } from 'country-flag-icons/react/3x2'

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
                "details",
                "p-5",
                "rounded",
                "text-center",
                "w-96"
            )}>
                <div className={clsx(
                    "mb-2"
                )}>
                    <p className={clsx(
                        "text-gray-500",
                        "",
                    )}>Curcumina</p>
                    <p className={clsx(
                        "text-xl text-gray-500",
                    )}>E100</p>
                </div>
                <div className={clsx(
                    "tag",
                    "text-xs",
                )}>
                    <p className={clsx(
                        "py-1 px-2 m-1 mb-2",
                        "inline-block",
                        "bg-[#4ade80]",
                        "rounded-full",
                        "text-[#fff]"
                    )}>E-100</p>
                    <p className={clsx(
                        "py-1 px-2 m-1 mb-2",
                        "inline-block",
                        "bg-[#4ade80]",
                        "rounded-full",
                        "text-[#fff]"
                    )}>Curcumin</p>
                    <p className={clsx(
                        "py-1 px-2 m-1 mb-2",
                        "inline-block",
                        "bg-[#4ade80]",
                        "rounded-full",
                        "text-[#fff]"
                    )}>Turmeric</p>
                    <p className={clsx(
                        "py-1 px-2 m-1 mb-2",
                        "inline-block",
                        "bg-[#4ade80]",
                        "rounded-full",
                        "text-[#fff]"
                    )}>Turmeric extract</p>
                    <p className={clsx(
                        "py-1 px-2 m-1 mb-2",
                        "inline-block",
                        "bg-[#4ade80]",
                        "rounded-full",
                        "text-[#fff]"
                    )}>Curcumin powder</p>
                </div>
                {/* Toxic Level */}
                <div className={clsx(
                    "desc",
                    "my-5",
                    "text-left"
                )}>
                    <span className={clsx(
                        "text-gray-500 ",
                        "mr-2"
                    )}>Toxic Level</span>
                    <div className={clsx(
                        "w-full",
                        "flex justify-center items-center",
                        "my-5"
                    )}>
                        <div className={clsx(
                            "desc",
                            "text-xl",
                            "w-1/2",
                            "flex justify-center items-center"
                        )}>
                            <GaugeChart id="gauge-chart1"
                                nrOfLevels={20}
                                percent={0.1}
                                arcWidth={0.2}
                                cornerRadius={1}></GaugeChart>
                        </div>
                    </div>
                </div>
                {/* Category */}
                <div className={clsx(
                    "desc",
                    "my-5",
                    "text-left"
                )}>
                    <span className={clsx(
                        "text-gray-500 ",
                        "mr-2"
                    )}>Category</span>
                    <span className={clsx(
                        "desc",
                        "text-xl text-"
                    )}>Colours</span>
                </div>
                {/* Description */}
                <div className={clsx(
                    "desc",
                    "my-5",
                    "text-left"
                )}>
                    <span className={clsx(
                        "text-gray-500 ",
                        "mr-2"
                    )}>description</span>
                    <span className={clsx(
                        "desc",
                        "text-xl text-"
                    )}>Naturally occurring orange/yellow colour,
                        Extracted from the spice turmeric</span>
                </div>
                {/* Examples */}
                <div className={clsx(
                    "example",
                    "mb-5",
                    "text-left"
                )}>
                    <span className={clsx(
                        "text-gray-500 ",
                        "mr-2"
                    )}>Example</span>
                    <span className={clsx(
                        "text-xl"
                    )}>Used in pastries,
                        confectionery,
                        sauces, and soups
                    </span>
                </div>
                {/* Approval */}
                <div className={clsx(
                    "example",
                    "mb-5",
                    "text-left"
                )}>
                    <span className={clsx(
                        "text-gray-500 ",
                        "mr-2"
                    )}>Approval</span>
                    <div className={clsx(
                        "text-xl",
                        "flex justify-center items-center"
                    )}>
                        <US title="United States" className={clsx(
                            "w-10",
                            "m-2"
                        )} />
                        <EU title="United States" className={clsx(
                            "w-10",
                            "m-2"
                        )} />
                        <AU title="United States" className={clsx(
                            "w-10",
                            "m-2"
                        )} />
                    </div>
                </div>
            </div>
            <div className={clsx(
                "flex justify-center items-center",
                "fixed bottom-0 right-0 left-0"
            )}>
                <p className={clsx(
                    "halal",
                    "w-full",
                    "rounded",
                    "text-2xl text-[#fff] text-center",
                    "p-1",
                )}>HALAL</p>
            </div>
        </section>
    </div>
}

export default Enumber