import clsx from "clsx";
import React from "react";

export default function Additivesdesc({ desc }) {
    return (
        <div className={clsx(
            "flex items-center",
        )}>
            <h4 className={clsx(
                "text-slate-500 text-xl",
            )}>description | </h4>
            <p className={clsx(
                "mx-2",
            )}>
                {desc}
            </p>
        </div>
    );
}
