import React from "react";

interface ProductProps {
    params: { id: number }
}

export default function Product({ params }: ProductProps) {
    return (
        <div className='pt-20'>products id: {params.id}</div>
    );
}
