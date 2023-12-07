import clsx from "clsx";
import React from "react";

export default function Additivessource({ origin, category }) {
    return (
        <div className={clsx(
            "flex items-center",
            "mt-5",
            "text-2xl",
            "text-slate-500",
        )}>
            <p>
                {origin} origin
            </p>
            <span className={clsx(
                "mx-2",
            )}> - </span>
            <p>
                {category}
            </p>
        </div>
    );
}
