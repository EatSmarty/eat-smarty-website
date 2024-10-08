import clsx from 'clsx'
import React from 'react'

interface wrapperProps {
    children?: React.ReactNode,
    className?: string
}

export default function Wrapper({ children, className }: wrapperProps) {
    return (
        <div className={clsx(
            "w-full max-w-[1280px]",
            " flex justify-between flex-col min-h-screen",
            "mx-auto py-20",
            `${className}` || ""
        )}>
            {children}
        </div>
    )
}