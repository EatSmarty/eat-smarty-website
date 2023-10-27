import React from "react";
import Container from "@/components/products/container";
import clsx from "clsx";
import Header from "@/components/header/header";
import ProductJson from "@/lib/Product.json";
import NotFound from "./not-found";

interface ProductPageProps {
    params: { id: number }
}

export default function Page({ params }: ProductPageProps) {

    const MainProduct = ProductJson.filter(
        (product: { id: number; }) => {
            return (
                product.id
            );
        },
    );

    const currentUrl = MainProduct.some(item =>
        item.id === params.id);

    return (
        <>
            {currentUrl ? (
                <>
                    <Header title={"Product"}></Header>

                    <div className={clsx(
                        "flex justify-center",
                    )}>
                        <Container params={params} danger={5} />
                    </div>
                </>
            ) : (<NotFound />)}
        </>
    );
}
