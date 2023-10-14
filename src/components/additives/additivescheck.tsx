import clsx from 'clsx'
import React from 'react'

export default function Additivescheck({ allergy, halal }) {
    return (
        <div className={clsx(
            "flex items-center"
        )}>
            <div className={clsx(
                "my-5 mx-1 p-1",
                "flex items-center",
                "bg-red-500",
                "rounded"
            )}>
                <h4 className={clsx(
                    "text-white"
                )}>
                    Allergy
                </h4>
                <p className={clsx(
                    "ml-2"
                )}>
                    {allergy}
                </p>
            </div>
            <div className={clsx(
                "my-5 mx-1 p-1",
                "flex items-center",
                "bg-red-500",
                "rounded"
            )}>
                <h4 className={clsx(
                    "text-white"
                )}>
                    Halal
                </h4>
                <p className={clsx(
                    "ml-2"
                )}>
                    {halal}
                </p>
            </div>
        </div>
    )
}
