import React, { useState } from 'react';
import Ishalal from '../additives/ishalal';
import clsx from 'clsx';


export default function Scanned() {

    return (
        <>
            <div className={clsx(
                "pt-20",
                "text-center text-2xl text-green-600",
                "font-bold",
                "flex justify-center"
            )}>
                <p>Scanned</p>
                <Ishalal isHalal={true} />
            </div>
        </>
    );
};