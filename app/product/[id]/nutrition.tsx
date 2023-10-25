import clsx from "clsx";
import React from "react";
import TableRow from "./tablerow";

export default function Nutrition() {
    return (
        <div className={clsx(
            "text-xl",
            "my-5",
        )}>
            <h1>Nutrition Facts</h1>
            <table>
                <TableRow title="Energy" value={"100kcal"} />
                <TableRow title="Proteins" value={"100kcal"} />
                <TableRow title="Carbohydrate" value={"100kcal"} />
                <TableRow title="Sugars" value={"100kcal"} />
                <TableRow title="Fat" value={"100kcal"} />
                <TableRow title="Fibre" value={"100kcal"} />
                <TableRow title="Sodium" value={"100kcal"} />
                <TableRow title="Salt" value={"100kcal"} />
                <TableRow title="Saturates" value={"100kcal"} />
            </table>
        </div>
    );
}
