import clsx from "clsx";
import { AU, EU, US } from "country-flag-icons/react/3x2";

export default function Approval() {
    return (
        <>
            <div className={clsx(
                "my-5",
                "flex items-center",
            )}>
                <span className={clsx(
                    "text-slate-500 text-xl",
                    "mr-2",
                )}>Approval</span>
                <div className={clsx(
                    "text-xl",
                    "flex items-center",
                )}>
                    <US title="United States" className={clsx(
                        "w-10",
                        "m-2",
                    )} />
                    <EU title="United States" className={clsx(
                        "w-10",
                        "m-2",
                    )} />
                    <AU title="United States" className={clsx(
                        "w-10",
                        "m-2",
                    )} />
                </div>
            </div>
        </>
    );
}