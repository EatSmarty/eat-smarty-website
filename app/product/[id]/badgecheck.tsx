import clsx from "clsx";
import React from "react";

interface BadgeChekcProps {
    truthyOption: JSX.Element
    title: string
    isTrue: boolean
}

export default function Badgecheck(
    { title, truthyOption, isTrue }: BadgeChekcProps,
) {
    return (
        <div className={clsx(
            "flex items-center",
            "mx-2 px-2 py-1 h-10",
            isTrue ? "bg-green-500" : "bg-red-500",
            "rounded",
        )}>
            <p className={clsx(
                "mx-1",
            )}>
                {title}
            </p>
            {truthyOption}
        </div>
    );
}
