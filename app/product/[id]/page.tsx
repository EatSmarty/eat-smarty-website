import Product from "./productId";
import Container from "./container";
import clsx from "clsx";

interface ProductPageProps {
    params: { id: number }
}

export default function ProductPage({ params }: ProductPageProps) {
    return (
        <div className={clsx(
            "flex justify-center",
        )}>
            <Product params={params} />
            <Container danger={5} />
        </div>
    );
}