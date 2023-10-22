import React from "react";
import clsx from "clsx";

export default function Container() {
    return (
        <div className={clsx(
            "flex justify-start flex-col",
            "my-5 w-1/2",
        )}>
            {/* <ImageContainer /> */}
        </div>
    );
}
