import React from "react";
import Container from "@/components/products/container";
import clsx from "clsx";
import Header from "@/components/header/header";
import ProductJson from "@/lib/Product.json";
import NotFound from "../not-found";
import { notFound } from "next/navigation";

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

    const indexProduct = MainProduct.filter(index =>
        index.id == params.id,
    );

    const currentUrl = indexProduct.some(testId => testId.id);

    if (!currentUrl) {
        notFound();
    }

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
