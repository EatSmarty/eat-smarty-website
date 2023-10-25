import clsx from "clsx";
import React from "react";

interface TableProps {
    title: string,
    value: string | number
}

export default function TableRow({ title, value }: TableProps) {
    return (
        <tr className={clsx(
            "text-left",
        )}>
            <th>{title}</th>
            <td>{value}</td>
        </tr>
    );
}
