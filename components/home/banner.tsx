import clsx from 'clsx'


export default function Banner({ }) {
    return (
        <section className={clsx(
            "banner",
            "text-3xl",
            "w-full",
            "mt-28"
        )}>
            <h2>
                <div className={clsx(
                    "flex justify-center items-center",
                )}>
                    <span className={clsx(
                        "title",
                        "text-[#0069FE]",
                        "font-bold mr-2",
                    )}>Halalvar</span>
                    <span className={clsx(
                        "sub-title",
                        "font-bold",
                        "text-gray-500"
                    )}>Barcode-wise,</span>
                </div>
                <div className={clsx(
                    "flex justify-center items-center"
                )}>
                    <span className={clsx(
                        "sub-title",
                        "font-bold",
                        "text-gray-500"
                    )}>Halal-wise</span>
                </div>
            </h2>
        </section>
    )
}


