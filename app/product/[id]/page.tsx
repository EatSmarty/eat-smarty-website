import React from "react";
import Container from "@/components/products/container";
import clsx from "clsx";
import Header from "@/components/header/header";

interface ProductPageProps {
    params: { id: number }
}

export default function Page({ params }: ProductPageProps) {
    return (
        <>
            <Header title={"Product"}></Header>

            <div className={clsx(
                "flex justify-center",
            )}>
                <Container params={params} danger={5} />
            </div>
        </>
    );
}
