import { FC } from "react";
import Product from "./productId";

interface PageProps {
    params: { id: number }
}

const page: FC<PageProps> = ({ params }) => {
    return (
        <>
            <Product params={params} />
            {/* <Container /> */}
        </>
    );
};

export default page;