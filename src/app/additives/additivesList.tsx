import { useState } from 'react'
import additives from './additives.json'
import AdditiveCart from './additivesCart'


export default function AdditiveList() {
    const [jsonData] = useState(additives)

    return (
        <>
            {jsonData.map((index) => {
                return (
                    <div>
                        <AdditiveCart
                            name={index.name}
                            enumber={index.eNumber}
                            badge={index.isHalal}
                            danger={index.danger}
                            source={index.source}
                        />
                    </div>
                )
            })}
        </>
    )
}