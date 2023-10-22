import clsx from "clsx";
import React from "react";

export default function Additivesexample({ exampleUse }) {
    return (
        <div className={clsx(
            "my-5",
            "flex items-center",
        )}>
            <h4 className={clsx(
                "text-slate-500 text-xl",
            )}>
                Use |
            </h4>
            <p className={clsx(
                "ml-2",
            )}>
                {exampleUse}
            </p>
        </div>
    );
}
