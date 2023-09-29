import React from 'react'

interface productProps {
    params: { id: number }
}

export default function Product({ params }: productProps) {
    return (
        <div className='pt-20'>products id: {params.id}</div>
    )
}
