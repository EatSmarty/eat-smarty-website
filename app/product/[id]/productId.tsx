import React from "react";

interface ProductProps {
    params: { id: number }
}

export default function Product({ params }: ProductProps) {
    return (
        <>{params.id}</>
    );
}
