import { useState } from 'react'
import additives from './additives.json'
import AdditiveCart from './additivesCart'

export default function AdditiveList() {
    // const [filteredList, setFilteredList] = useState(additives.map((index) => {
    //     return index.eNumber
    // }))
    // const filterBySearch = (event) => {
    //     // Access input value
    //     const query = event.target.value;
    //     // Create copy of item list
    //     var updatedList = [...filteredList]
    //     // Include all elements which includes the search query
    //     updatedList = updatedList.filter((item) => {
    //         return item.toLowerCase().indexOf(query.toLowerCase()) !== -1
    //     });
    //     // Trigger render with updated values
    //     setFilteredList(updatedList)
    // }

    const jsonData = additives

    return (
        jsonData.map((index) => {
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
