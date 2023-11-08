import clsx from "clsx";
import React from "react";

export default function Additivesothername({ othername }) {
    return (
        <div className={clsx(
            "my-5",
            "flex items-center",
        )}>
            <h4 className={clsx(
                "text-slate-500 text-xl",
            )}>other name | </h4>
            <p className={clsx(
                "mx-2",
            )}>
                {othername}
            </p>
        </div>
    );
}
