import clsx from 'clsx'
import React from 'react'

export default function Additivesdesc({ desc }) {
    return (
        <div className={clsx(
        )}>
            <h4 className={clsx(
                "text-slate-500 text-xl"
            )}>description</h4>
            <p>
                {desc}
            </p>
        </div>
    )
}
