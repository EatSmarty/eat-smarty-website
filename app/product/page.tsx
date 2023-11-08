import ProductPage from "./[id]/page";
import React from "react";

export default function page({ params }) {
    return (
        <>
            <ProductPage params={params} />
        </>
    );
}
