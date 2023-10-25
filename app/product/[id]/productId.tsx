import React from "react";

interface ProductProps {
    params: { id: number }
}

export default function Product({ params }: ProductProps) {
    return (
        <div>{params.id}</div>
    );
}
