import clsx from "clsx";
import additives from '../../../app/additives/additives.json'


export default function AdditiveName() {
    return (
        <>
            <div className={clsx(
                "mb-2"
            )}>
                <p className={clsx(
                    "text-gray-500",
                    "",
                )}>{additives[0].name}</p>
                <p className={clsx(
                    "text-xl text-gray-500",
                )}>{additives[0].eNumber}</p>
            </div>
        </>
    )
}