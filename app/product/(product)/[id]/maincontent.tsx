import clsx from 'clsx'
import React from 'react'

export default function Maincontent() {
    return (
        <div>
            <h2 className={clsx(
                "text-2xl",
                "mx-5"
            )}>title</h2>
            <p>description</p>
            <p>nutration</p>
            <p>ingredient</p>
            <p>aprovall</p>
        </div>
    )
}
