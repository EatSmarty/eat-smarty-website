import clsx from "clsx";
import React from "react";
import ProductJson from "@/lib/Product.json";

export default function Productdecscription() {
    return (
        <>
            <h2 className={clsx(
                "text-2xl",
                "text-gray-500",
            )}>Description</h2>
            <p className={clsx(
                "mx-2",
            )}>
                {ProductJson[0].description}
            </p>
        </>
    );
}
