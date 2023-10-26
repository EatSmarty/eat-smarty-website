import clsx from "clsx";
import React from "react";
import TableRow from "./tablerow";

interface NutritionProps {
    energy: string | number | null;
    proteins: string | number | null;
    carbohydrate: string | number | null;
    sugars: string | number | null;
    fat: string | number | null;
    fibre: string | number | null;
    sodium: string | number | null;
    salt: string | number | null;
    saturates: string | number | null;
}

export default function Nutrition({
    energy,
    proteins,
    carbohydrate,
    sugars,
    fat,
    fibre,
    sodium,
    salt,
    saturates }: NutritionProps) {
    return (
        <div className={clsx(
            "text-2xl",
            "my-5",
        )}>
            <h2 className={clsx(
                "text-gray-500",
            )}>Nutrition Facts</h2>
            <hr />
            <TableRow title="Energy" value={energy} />
            <TableRow title="Proteins" value={proteins} />
            <TableRow title="Carbohydrate" value={carbohydrate} />
            <TableRow title="Sugars" value={sugars} />
            <TableRow title="Fat" value={fat} />
            <TableRow title="Fibre" value={fibre} />
            <TableRow title="Sodium" value={sodium} />
            <TableRow title="Salt" value={salt} />
            <TableRow title="Saturates" value={saturates} />
        </div>
    );
}
