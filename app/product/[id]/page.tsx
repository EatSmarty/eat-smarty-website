import React from "react";
import Container from "@/components/products/container";
import clsx from "clsx";
import ProductJson from "@/lib/Product.json";
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
            <div className={clsx(
                "flex justify-center",
            )}>
                <Container params={params} danger={5} />
            </div>
        </>
    );
}
