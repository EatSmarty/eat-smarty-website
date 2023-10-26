import Header from "@/components/header/header";
import ProductPage from "./[id]/page";
import React from "react";

export default function page({ params }) {
    return (
        <>
            <Header title={"Product"}></Header>
            <ProductPage params={params} />
        </>
    );
}
