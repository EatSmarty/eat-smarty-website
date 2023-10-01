import clsx from "clsx";
import { AU, EU, US } from "country-flag-icons/react/3x2";



export default function Approval() {
    return (
        <>
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
        </>
    )
}