import { useState } from 'react'
import additives from './additives.json'
import GaugeChart from 'react-gauge-chart'
import Link from 'next/link'
import clsx from 'clsx'
import AdditiveCart from './additivesCart'

export default function AdditiveList() {
    // const [enumber] = useState(additives.map((enumber) => {
    //     return enumber.eNumber
    // }))
    // const [filteredList, setFilteredList] = useState(additives.map((index) => {
    //     return index.eNumber
    // }))
    // const filterBySearch = (event) => {
    //     // Access input value
    //     const query = event.target.value;
    //     // Create copy of item list
    //     var updatedList = [...enumber]
    //     // Include all elements which includes the search query
    //     updatedList = updatedList.filter((item) => {
    //         return item.toLowerCase().indexOf(query.toLowerCase()) !== -1
    //     });
    //     // Trigger render with updated values
    //     setFilteredList(updatedList)
    // }

    const [jsonData] = useState(additives)

    return (
        jsonData.map((index, item) => {
            return (
                <AdditiveCart
                    name={index.name}
                    enumber={index.eNumber}
                    badge={index.isHalal}
                    danger={index.danger}
                    source={index.source}
                />
            )
        })
    )
}

