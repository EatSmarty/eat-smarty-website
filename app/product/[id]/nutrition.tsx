import clsx from "clsx";
import React from "react";
import TableRow from "./tablerow";

export default function Nutrition() {
    return (
        <div className={clsx(
            "text-xl",
            "my-5 mx-2",
        )}>
            <h1>Nutrition Facts</h1>
            <table>
                <TableRow title="Energy" value={"100kcal"} />
                <TableRow title="Proteins" value={"1"} />
                <TableRow title="Carbohydrate" value={"1"} />
                <TableRow title="Sugars" value={"1"} />
                <TableRow title="Fat" value={"1"} />
                <TableRow title="Fibre" value={"1"} />
                <TableRow title="Sodium" value={"1"} />
                <TableRow title="Salt" value={"1"} />
                <TableRow title="Saturates" value={"1"} />
            </table>
        </div>
    );
}
