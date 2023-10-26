import clsx from "clsx";
import React from "react";

interface TableProps {
    title: string,
    value: string | number | null
}

export default function TableRow({ title, value }: TableProps) {
    return (
        <div className={clsx(
            "flex justify-between",
            "text-xl",
            "mx-2 p-1",
            "rounded",
            "hover:bg-gray-100 duration-75",
        )}>
            <h3 className={clsx(
                "mr-2",
            )}>
                {title}</h3>
            <p className={clsx(
            )}>{value}</p>
        </div >
    );
}
