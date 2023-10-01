import clsx from 'clsx'
import React from 'react'

interface enumberProps {
    enumber: string
}

export default function Product({ enumber }: enumberProps) {
    return (
        <>
            <h1 className={clsx(
                "pt-20"
            )}>
                {enumber}
            </h1>
        </>
    )
}
