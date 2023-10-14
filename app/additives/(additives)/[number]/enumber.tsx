import clsx from 'clsx'
import React from 'react'

interface enumberProps {
    params: { number: string }
}

export default function Enumber({ params }: enumberProps) {
    return (
        <div> {params.number} </div>
    )
}
